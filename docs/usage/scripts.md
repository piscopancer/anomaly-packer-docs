# Scripts

Normal Lua files are known to be dynamically typed thus type-unsafe while IDE does not support strict linting and type checking. Sometimes it can be painful to debug and typos are hard to notice. With TypeScript and a proper IDE like VSCode or Intellij IDEA that provides [intellisense](https://code.visualstudio.com/docs/editor/intellisense) developing becomes much easier. TypeScript has originally been used for web apps and fortunately today it's possible to use TypeScript for anything, including Lua.

Lua is generated with the help of [type declaration files](#type-declaration-files) provided by Anomaly Packer. The process of such generation is called transpilation, this is possible thanks to the [typescript-to-lua](https://www.npmjs.com/package/typescript-to-lua) NPM package. Clearly, Anomaly Packer uses it and obeys its [rules](#rules), so should you.

## Preparation

### Register scripts

TypeScript files under gamedata/scripts will not be included in the build by default. Every script file must be proclaimed as "registered" when packing the build. The packer will search for the script with the name in `sourceFileName` and rename it into what's in `buildFileName`, if specified, otherwise will preserve the name.

::: code-group

```ts [index.ts]
import { pack } from 'anomaly-packer'

await pack({
  // ...
  scripts: [{ sourceFileName: 'ghen', buildFileName: 'tuong' }],
  // ...
})
```

```ts [gamedata/scripts/ghen.ts]
let skibidi = 1
skibidi++
```

```lua [build/gamedata/scripts/tuong.script]
--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
____exports = {}
skibidi = 1
skibidi = skibidi + 1
```

:::

```sh
bun run .
```

### Provide tsconfig

Transpilation to Lua requires that a tsconfig is provided in the specific directory that will act the starting point of the transpilation, only TypeScript files inside it will participate. This is so to reduce the transpilation time because you can have 100 TypeScript files in your addon somewhere outside of gamedata/scripts and typescript-to-lua will still transpile them, even though it is pointless.

This way, Anomaly Packer requires you to have a 2nd tsconfig in gamedata/scripts to treat gamedata/script as a "separate" project and transpile TypeScript files only within this directory. Add this tsconfig to the gamedata/scripts extending your root tsconfig.

::: code-group

```json [gamedata/scripts/tsconfig.json]
{
  "extends": "../../tsconfig.json"
}
```

:::

::: warning
Anomaly Packer will throw an error if you don't provide a valid tsconfig under gamedata/scripts
:::

## Type declaration files

Type declaration files like game.d.ts is what makes the transpilation possible. They are also called "ambient" files as they do not provide any implementation of code, pretty much like headed files in C++, they only exist for TypeScript's compiler and your IDE intellisense, so that you can have first class type-safety. You will use these files to access global modules and global functions that exist in \_unpacked and those of [XRay Monolith](https://bitbucket.org/anomalymod/xray-monolith/src/master/) that were "exported" to Lua with [luabind definitions](https://luabind.sourceforge.net/docs.html#scopes).

The most basic declaration file is game.d.ts, it accumulates types from Lua modules in \_unpacked directory of Anomaly and global functions, namespaces and classes "exported" with luabind from XRay Monolith. This file consists of thousands of line of code and the list is still incomplete. It requires many working hands of the Anomaly modding community to declare as much of types as possible.

Your addon will most likely use your own type definitions, for example your `AddonId` can be used very nicely in tandem with `mcm.d.ts`:

```ts
declare type McmConfig = {
  // example_slider_value: number
  // example_text_value: string
  // example_check_value: boolean
}

declare var ui_mcm:
  | {
      get: <Key extends keyof McmConfig>(this: void, path: `${AddonId}/${Key}`) => McmConfig[Key]
    }
  | undefined
```

As you can see, ui_mcm.get function can be strictly typed to only use you `AddonId` as the prefix of the path. Currently it resolved to `any` as no `AddonId` was declared yet. To declare it you will want to create you own declaration file and give it unique name so it does not get accidentally overriden as you run the [`add`](#terminal-commands) terminal command.

::: code-group

```ts [src/types/my_super_addon.d.ts]
declare type AddonId = 'my_super_addon'
```

:::

Now `AddonId` in mcm.d.ts will resolve to `my_super_addon` and you will have proper paths in `ui_mcm.get` function like `my_super_addon/jump_height`

## Terminal commands

In order to start accessing the game's code with TypeScript you need to have at least game.d.ts somewhere inside of your addon directory. You can query this file from Anomaly Packer with the `add` terminal command.

```sh
bun run anomaly-packer add game src/types
```

where

- `game` is the name of the declaration file you are querying from Anomaly Packer. For example, if you work with [MCM](https://www.moddb.com/mods/stalker-anomaly/addons/anomaly-mod-configuration-menu), you will want to have `mcm` in that place. This way types can be declared for any addon in Anomaly Packer, including `monolith_realistic_boobs_beta` or whatever addon you need to work with. Read more about contributing your declaration files [here](../contribution/type-declarations.md).
- `src/types` is directory within your addon of your choosing. If you have not created such directory yet, it will be created for you.

The above terminal command will result into this file appearing in your project.

As Anomaly Packer recieves updates and gets its declaration types updated you will want to rerun the `add` command in order to have the most fresh variables and functions in your TypeScript files. Just be careful not to override your existing declaration files if you already made changes to them to fit your addon's requirements.

```
src
-- types
   -- game.d.ts
```

## Rules

Do not

## Examples

TODO
