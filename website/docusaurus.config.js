// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Virtual Client',
  tagline: 'Cloud-ready standardized workload automation from Microsoft Azure.',
  url: 'https://microsoft.github.io',
  baseUrl: '/VirtualClient/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'microsoft', // Usually your GitHub org/user name.
  projectName: 'VirtualClient', // Usually your repo name.
  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/microsoft/VirtualClient/edit/main/website',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/microsoft/VirtualClient/edit/main/website',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'performance, benchmarking, automation, framework, microsoft'}],
      navbar: {
        title: 'Virtual Client',
        logo: {
          alt: 'My Site Logo',
          src: 'img/vc-logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'overview/overview',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/blog', 
            label: 'Blog', 
            position: 'left'
          },
          {
            href: 'https://github.com/microsoft/VirtualClient',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Overview',
                to: '/docs/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussion',
                href: 'https://github.com/microsoft/VirtualClient/discussions',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/microsoft/VirtualClient',
              },
            ],
          },
        ],
        logo: {
          alt: 'MSFT Logo',
          src: 'img/microsoft-logo-white-text.svg',
          href: 'https://microsoft.com/',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft.`,
      },
      announcementBar: {
        id: 'supportus',
        content:
          '⭐️ If you like VirtualClient, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/microsoft/VirtualClient">GitHub</a> ⭐️',
      },
      prism: {
        defaultLanguage: 'csharp',
        theme: require('./src/css/prismtheme.js'),
        darkTheme: require('./src/css/prismtheme.js'),
        additionalLanguages: [
          'json',
          'powershell',
          'csharp',
          'bash',
          'xml-doc',
          'mermaid',
          'kusto'
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
    }),
};

module.exports = config;