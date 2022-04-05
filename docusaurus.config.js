module.exports = {
  title: 'Note Documentation',
  tagline: 'Your digital care companion',
  url: 'https://notedocs.chorus.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Chorus', // Usually your GitHub org/user name.
  projectName: 'Note-Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Chorus Documentation',
      logo: {
        alt: 'Chorus Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/GettingStarted',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
       // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Chorus/Note-Documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          // title: 'Docs',
          // items: [
          //   {
          //     label: 'Style Guide',
          //     to: 'docs/',
          //   },
          //   {
          //     label: 'Second Doc',
          //     to: 'docs/doc2/',
          //   },
          // ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Chorus/Note-Documentation/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Chorus/Note-Documentation/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
