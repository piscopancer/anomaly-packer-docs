<!--@include: ./index.md-->

# Type Declarations

Currently there are more than several thousand lines of code in game.d.ts and there are dozens of modules that have not been provided with proper type declarations yet. Where you see `TODO`, you will realize that this part of the declaration file is either a WIP or there was not any work done towards it yet. For example

::: code-group

```ts [game.d.ts]
declare var tasks_guide: TODO
```

:::

This module comes from the \_unpacked directory and you can contribute to the project by replacing this `TODO` with a proper object that will illustrate the global variables and functions avaliable in this module.

It will also be nice if you leave a comment that your declaration is not fully complete, so that other contributors know that this place can be improved, like so

::: code-group

```ts [game.d.ts]
// WIP
declare var tasks_guide: {
  // ...
  some_func(this: void, index: number): number
  // ...
}
```

:::

All avaliable type declaration files can be worked with on [GitHub](https://github.com/piscopancer/anomaly-packer/tree/master/src/types).
