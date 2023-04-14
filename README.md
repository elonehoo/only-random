# only-random

[![NPM version](https://img.shields.io/npm/v/@elonehoo/only-random?color=a1b858&label=)](https://www.npmjs.com/package/@elonehoo/only-random)

> Generate random numbers that are consecutively unique

Useful for things like slideshows where you don't want to have the same slide twice in a row.

## install

```shell
# npm
npm install --save @elonehoo/only-random
# yarn
yarn add --save @elonehoo/only-random
# pnpm
pnpm install --save @elonehoo/only-random
```

## usage

```ts
import onlyRandom from '@elonehoo/only-random'

const random = onlyRandom(1, 10)

console.log(random(), random(), random())
```

## API

**onlyRandom(minimum:number, maximum:number)**

Returns a function, that when called, will return a random number that is never the same as the previous.
