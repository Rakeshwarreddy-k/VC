﻿// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

namespace VirtualClient.Logging
{
    using System;
    using System.Collections.Generic;
    using System.IO;
    using System.IO.Abstractions;
    using System.Linq;
    using System.Reflection;
    using System.Text;
    using System.Threading;
    using System.Threading.Tasks;
    using Microsoft.Extensions.Logging;
    using Polly;
    using VirtualClient.Common;
    using VirtualClient.Common.Extensions;
    using VirtualClient.Common.Telemetry;
    using VirtualClient.Contracts;
    using ILogger = Microsoft.Extensions.Logging.ILogger;

    /// <summary>
    /// An <see cref="ILogger"/> implementation for writing metrics data to a CSV file.
    /// </summary>
    public class OcpFileLogger : ILogger, IFlushableChannel, IDisposable
    {
        private static readonly Encoding ContentEncoding = Encoding.UTF8;

        private ConcurrentBuffer buffer;
        private string logDirectory;
        private string fileDirectory;
        private string fileExtension;
        private List<string> filePaths;
        private IAsyncPolicy fileAccessRetryPolicy;
        private IFileSystem fileSystem;
        private Task flushTask;
        private bool initialized;
        private long maxFileSizeBytes;
        private SemaphoreSlim semaphore;
        private bool disposed;

        /// <summary>
        /// Initializes a new instance of the <see cref="OcpFileLogger"/> class.
        /// </summary>
        /// <param name="logDirectory">The path to the CSV file to which the metrics should be written.</param>
        /// <param name="maximumFileSizeBytes">The maximum size of each CSV file (in bytes) before a new file (rollover) will be created.</param>
        /// <param name="retryPolicy"></param>
        public OcpFileLogger(string logDirectory, long maximumFileSizeBytes, IAsyncPolicy retryPolicy = null)
        {
            logDirectory.ThrowIfNullOrWhiteSpace(nameof(logDirectory));

            this.logDirectory = logDirectory;
            this.fileDirectory = Path.GetDirectoryName(logDirectory);
            this.fileExtension = Path.GetExtension(logDirectory);
            this.filePaths = new List<string>();
            this.fileSystem = new FileSystem();
            this.buffer = new ConcurrentBuffer();
            this.fileAccessRetryPolicy = retryPolicy ?? Policy.Handle<IOException>().WaitAndRetryAsync(5, (retries) => TimeSpan.FromSeconds(retries));
            this.maxFileSizeBytes = maximumFileSizeBytes;
            this.semaphore = new SemaphoreSlim(1, 1);
        }

        /// <inheritdoc />
        public IDisposable BeginScope<TState>(TState state)
        {
            return null;
        }

        /// <summary>
        /// Disposes of resources used by the instance.
        /// </summary>
        public void Dispose()
        {
            this.Dispose(true);
            GC.SuppressFinalize(this);
        }

        /// <summary>
        /// Flushes the remaining buffer content to the file system.
        /// </summary>
        /// <param name="timeout">Not used.</param>
        public void Flush(TimeSpan? timeout = null)
        {
            this.FlushBufferAsync().GetAwaiter().GetResult();
        }

        /// <inheritdoc />
        public bool IsEnabled(LogLevel logLevel)
        {
            return true;
        }

        /// <inheritdoc />
        public void Log<TState>(LogLevel logLevel, EventId eventId, TState state, Exception exception, Func<TState, Exception, string> formatter)
        {
            EventContext eventContext = state as EventContext;

            if (eventContext != null)
            {
                if (eventId.Id == (int)LogType.Metrics)
                {
                    try
                    {
                        try
                        {
                            this.semaphore.Wait();
                            string message = OcpFileLogger.CreateMessage(eventContext);
                            this.buffer.Append(message);
                        }
                        finally
                        {
                            this.semaphore.Release();
                        }

                        if (this.flushTask == null)
                        {
                            this.flushTask = this.MonitorBufferAsync();
                        }
                    }
                    catch
                    {
                        // Best effort. We do not want to crash the application on failures to access
                        // the CSV file.
                    }
                }
            }
        }

        /// <summary>
        /// Disposes of resources used by the instance.
        /// </summary>
        protected virtual void Dispose(bool disposing)
        {
            if (disposing)
            {
                if (!this.disposed)
                {
                    this.semaphore.Dispose();
                    this.disposed = true;
                }
            }
        }

        private static string WriteMeasurementStart(EventContext context)
        {
            StringBuilder messageBuilder = new StringBuilder();
            messageBuilder.Append(Environment.NewLine);

            return messageBuilder.ToString();
        }

        private Task MonitorBufferAsync()
        {
            return Task.Run(async () =>
            {
                while (true)
                {
                    try
                    {
                        if (!this.initialized)
                        {
                            this.InitializeFilePaths();
                            this.initialized = true;
                        }

                        await Task.Delay(300);
                        await this.FlushBufferAsync();
                    }
                    catch
                    {
                        // Best effort. We do not want to crash the application on failures to write file.
                    }
                }
            });
        }

        private async Task FlushBufferAsync()
        {
            if (this.buffer.Length > 0)
            {
                await this.fileAccessRetryPolicy.ExecuteAsync(async () =>
                {
                    try
                    {
                        await this.semaphore.WaitAsync();
                        string latestFilePath = this.filePaths.Last();

                        using (FileSystemStream fileStream = this.fileSystem.FileStream.New(latestFilePath, FileMode.OpenOrCreate, FileAccess.ReadWrite, FileShare.ReadWrite))
                        {
                            if (fileStream.Length == 0)
                            {
                                string columnHeaders = EventContextLoggingExtensions.GetCsvHeaders();
                                fileStream.Write(OcpFileLogger.ContentEncoding.GetBytes(columnHeaders));
                            }

                            byte[] bufferContents = OcpFileLogger.ContentEncoding.GetBytes(this.buffer.ToString());

                            if (fileStream.Length + bufferContents.Length > this.maxFileSizeBytes)
                            {
                                this.filePaths.Add(Path.Combine(this.fileDirectory, $"{this.fileNameNoExtension}_{this.filePaths.Count}{this.fileExtension}"));
                            }

                            fileStream.Position = fileStream.Length;
                            fileStream.Write(bufferContents);
                            await fileStream.FlushAsync();

                            this.buffer.Clear();
                        }
                    }
                    finally
                    {
                        this.semaphore.Release();
                    }
                });
            }
        }

        private void InitializeFilePaths()
        {
            if (!this.fileSystem.Directory.Exists(this.fileDirectory))
            {
                this.fileSystem.Directory.CreateDirectory(this.fileDirectory);
            }

            IEnumerable<string> matchingFiles = this.fileSystem.Directory.EnumerateFiles(this.fileDirectory, $"{this.fileNameNoExtension}*{this.fileExtension}");
            if (matchingFiles?.Any() != true)
            {
                this.filePaths.Add(this.logDirectory);
            }
            else
            {
                this.filePaths.AddRange(matchingFiles.OrderBy(file => file));
            }
        }
    }
}