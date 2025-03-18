module.exports = {
  title: 'Note Documentation',
  tagline: 'Capture in-session data and configure care plans with a digital care companion that lives in your pocket.',
  url: 'https://notedocs.chorus.cloud/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  favicon: 'img/ChorusFavicon.png',
  organizationName: 'Chorus', // Usually your GitHub org/user name.
  projectName: 'Note-Documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      // title: 'Chorus Documentation',
      logo: {
        alt: 'Chorus Logo',
        src: 'img/ChorusFavicon.png',
      },
      items: [
        {
          to: 'docs/Overview',
          activeBasePath: 'docs',
          label: 'Chorus Documentation',
          position: 'left',
        },
       // {to: 'blog', label: 'Blog', position: 'left'},
        // {
        //   href: 'https://github.com/Chorus/Note-Documentation',
        //   label: 'GitHub',
        //   position: 'right',
        // },
      ],
    },
    algolia: {
      apiKey: 'bc972bbdd9c718d7473c295e86048b24',
      indexName: 'NoteDocs',
      appId: '1U3EFD2Y2W',
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
          // title: 'Community',
          // items: [
          //   {
          //     label: 'Stack Overflow',
          //     href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //   },
          //   {
          //     label: 'Discord',
          //     href: 'https://discordapp.com/invite/docusaurus',
          //   },
          //   {
          //     label: 'Twitter',
          //     href: 'https://twitter.com/docusaurus',
          //   },
          // ],
        },
        {
          // title: 'More',
          // items: [
          //   {
          //     label: 'Blog',
          //     to: 'blog',
          //   },
          //   {
          //     label: 'GitHub',
          //     href: 'https://github.com/facebook/docusaurus',
          //   },
          // ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chorus Software Solutions LLC.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'doc1',
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
        gtag: {
          trackingID: 'G-5K88EVV366',
          anonymizeIP: false,
        },
      },
    ],
  ],
};
