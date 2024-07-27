---
---

# Text generation

While working with gamedata directory it is welcome to include TypeScript files that represent the text files to be generated. For that every TypeScript file must return a default function returning a string that will become part of the resulting file upon the build. In simpler terms

::: code-group

```ts [addon/gamedata/configs/text/eng/ssfx_ui_rain.ts]
import { Texts } from 'anomaly-packer'

type ReturnedText = string | number | boolean

export default function (t: Texts): ReturnedText {
  const someTranslation = t.translation({
    text_1: 'Greetings, Boroda',
    text_2: 'Do we know each other, pal?',
  })
  const someTranslation2 = t.translation({
    text_1: 'We gotta hurry, the blowout is gonna come down in a minute or less...',
    text_2: 'Cool but did you know that butterflies can drink blood?',
  })
  return [someTranslation, someTranslation2].join('\n\n')
}
```

:::

## Latex

TODO

## Translation

TODO

## Character

TODO

## Dialog

TODO
