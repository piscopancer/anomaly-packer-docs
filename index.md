---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: 'Anomaly Packer'
  text: 'A tool for building type-safe addons with TypeScript'
  tagline: for S.T.A.L.K.E.R. Anomaly modders \(￣︶￣*\))
  actions:
    - theme: brand
      text: Read the docs
      link: /docs
    - theme: alt
      text: Contribute on GitHub
      link: https://github.com/piscopancer/anomaly-packer

features:
  - title: TypeScript to Lua
    details: Transpilation step enables type-safe development with TypeScript and community-created type declaration files
  - title: TypeScript is optional
    details: TS is a core feature of this tool, even though using it is not required
  - title: Gamedata directory
    details: Building is file based, meaning the output will replicate the original gamedata with an exception of compiled TypeScript files
---
