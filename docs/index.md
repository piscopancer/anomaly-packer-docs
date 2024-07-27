---
title: Anomaly Packer
---

# The purpose

Anomaly Packer is an [NPM package](https://www.npmjs.com/package/anomaly-packer) that was designed to be used with TypeScript to help modders who know TypeScript to feel more confident with their code and simplify the creation of game files with a set of utility functions.

::: info
TypeScript is a type-safe language and a linter for JavaScript. If you do not know TypeScript yet you are still interested in learning Anomaly Packer, you may be getting with [the basics of TypeScript](https://www.w3schools.com/typescript/typescript_simple_types.php) along the way.
:::

## Terminal Commands

Anomaly Packer provides some important terminal commands, like one for copying type declaration files into your project.

```sh
bun run anomaly-packer add game src/types
```

## Packing

Anomaly Packer provides a `pack` function that handles transpilation of TypeScript files and creates a build directory with the name of your choosing.

Read about packing in detail [here](./packing).

## Utility functions

Functions like `ltx`, `dialog` and `specificCharacter` make it easy and safe to create configs.
