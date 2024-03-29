// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '形式中文',
  tagline: 'A way to 降维 English text to be available',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://ishare20.net',
  // baseUrl: '/fc/',
  url: 'https://ishare20.github.io',
  baseUrl: '/formalizedChinese/',
 

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lemonTree', // Usually your GitHub org/user name.
  projectName: 'formalizedChinese', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  scripts: [
    {
      src: 'https://ishare20.net/fc/tj.js',
      async: false
    }
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      // Replace with your project's social card
      image: 'img/fc_social_card.png',
      navbar: {
        title: '形式中文',
        /* logo: {
          alt: '形式中文',
          src: 'img/logo.svg',
        }, */
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '指南',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/blog/20230731', label: '选词翻译', position: 'left'},
          {
            href: 'https://github.com/ishare20/formalizedChinese/discussions',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '指南',
                to: '/docs/intro',
              },
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '选词翻译',
                to: '/blog/20230731',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label:'Github Discussions',
                href:'https://github.com/ishare20/formalizedChinese/discussions'
              },
              {
                label: 'QQ群',
                href: 'http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=gTzn-fXckwCTHiMGtNPtjJkjuAzaCwlW&authKey=TnyZ%2B%2B0THftiJASwuOjHRyGHXgsSWkqT%2BI16C0DHHPHIckuVjIJBo0bt8qfaP0Vc&noverify=0&group_code=762734993',
              },
              {
                label: '豆瓣小组',
                href: 'https://www.douban.com/group/737565/',
              },
            ],
          },
          /* {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          }, */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Formalized Chinese, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
