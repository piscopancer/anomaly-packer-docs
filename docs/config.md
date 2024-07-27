# Configuration

The behavior of Anomaly Packer can be configured with the object fed to the `pack` function.

## `outDirName`

The name of the directory that will appear in the root of your addon and will contain the generated gamedata. The default name is "build".

```ts
const myAddonId = 'my_super_addon'

await pack({
  build: {
    outDirName: myAddonId + '_build',
  },
})
```

## `scripts`

Array of scripts that you want to register in your addon for the transpilation. All scripts under gamedata/scripts that need to be transpilation have to appear in this array.

```ts
const myAddonId = 'my_super_addon'

await pack({
  scripts: [
    {
      // TypeScript file name
      sourceFileName: 'script_lol',
      // Name of generated Lua file
      buildFileName: myAddonId + '_main',
    },
  ],
})
```

## `refresh`

::: warning
Use with care! If misused, this function can damage personal and valueable data!
:::

Additional paths to gamedata directory that will get refreshed with the gamedata of the fresh build. Useful when this addon was installed via Mod Organizer 2 and you simply want to refresh the installed copy after packing to run the game and test.

```ts
const myAddonId = 'my_super_addon'

await pack({
  refresh: [`C:/Users/Jack Daniels/AppData/Local/ModOrganizer/STALKER Anomaly/mods/${myAddonId}_build/gamedata`],
})
```
