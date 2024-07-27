import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Anomaly Packer',
  description: 'A development tool for building type-safe addons for S.T.A.L.K.E.R. Anomaly',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    externalLinkIcon: true,
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    nav: [{ text: 'Docs', link: 'docs/' }],
    sidebar: [
      {
        base: 'docs/',
        items: [
          { text: 'Installation', link: 'installation' },
          { text: 'Configuration', link: 'configuration' },
        ],
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
})
