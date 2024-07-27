# Gamedata

Anomaly Packer uses a file-based approach, supposing that there is a gamedata directory in the root of the addon.

```
addon
-- gamedata
```

::: warning
Gamedata directory is required, otherwise the packer will throw an error.
:::

Gamedata directory contents will be copied 1 to 1 to the resulting build directory. However it's not actually the case for every file. While reading through gamedata the packer will check for the file extensions to determine what to do. Any file will be simply copied into the build directory, unless it is a TypeScript file. For TypeScript files, their default exported function will be run in order to get the returned value that it exports, normally a `string`. For example,

::: code-group

```ts [addon/gamedata/configs/text/eng/translation_example.ts]
import { Texts } from 'anomaly-packer'

export default function (t: Texts) {
  const someTranslations = t.translation({
    text_1: 'Hello stalker. Why are you here?',
    text_2: 'I am here for Joe.',
    text_3: "I don't like this stupid joke.",
  })
  return someTranslations
}
```

:::

::: warning
Packer will throw an error if no default exported function is found in a TypeScript file.
:::

## Scripts directory

Scripts directory under gamedata/scripts is a reserved directory that has several requirements.

First of all, no directories inside it are allowed, only files. Any files are allowed, including TypeScript files but all of them must be direct children of the scripts directory

```
gamedata
-- scripts
   -- my_addon.lua
   -- my_addon_mcm.ts
   -- utils.ts
```

TypeScript files will be [transpiled to Lua](./scripts.md#terminal-commands) and other files like `.script` will be copied to the build directory untouched.
