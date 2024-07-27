import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Anomaly Packer',
  description: 'A development tool for building type-safe addons for S.T.A.L.K.E.R. Anomaly',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: {
      light: '/logo-light.svg',
      dark: '/logo-dark.svg',
    },
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    nav: [{ text: 'Docs on GitHub', link: 'https://github.com/piscopancer/anomaly-packer-docs' }],
    sidebar: [
      {
        items: [{ text: 'Intro', link: 'docs' }],
      },
      {
        text: 'First steps',
        base: 'docs/',
        items: [
          { text: 'Installation', link: 'install' },
          { text: 'Configuration', link: 'config' },
        ],
      },
      {
        base: 'docs/usage/',
        text: 'Usage',
        items: [
          { text: 'Gamedata directory', link: 'gamedata' },
          { text: 'Packing', link: 'packing' },
          { text: 'Scripts', link: 'scripts' },
          { text: 'Text generation', link: 'text' },
        ],
      },
      {
        base: '/docs/contribution/',
        text: 'Contribution',
        items: [{ text: 'Type Declarations', link: 'type-declarations' }],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/piscopancer/anomaly-packer',
      },
    ],
    footer: {
      message: "Do you want to hear a joke about pizza? Nevermind, it's too cheesy...",
    },
  },
  markdown: {
    theme: {
      dark: 'nord',
      light: 'github-light',
    },
  },
})
