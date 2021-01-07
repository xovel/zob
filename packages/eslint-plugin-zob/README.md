# eslint-plugin-zob

ESLint plugin for zob system.

## Rules

### [`zob/comment`](docs/comment.md)

- Add space between CJK character and alphabet, number, symbol.
- Fix typeset in Chinese context.

> 自动在 CJK 字符与英文字母、数字、符号之间插入空格，并修复部分中文语境下的排版问题。

### [`zob/methods-property-casing`](docs/methods-property-casing.md)

Enforce the casing of property for methods

> 确保在对象 `methods` 中的键值名的命名风格（小驼峰）。

## Changelog

### v0.2.1

- Fix docs path for `methods-property-casing`.

### v0.2.0

- Add `methods-property-casing`.

### v0.1.1

- Add `typeset` as an alias to `comment`.
- Add all punctuation as symbol.

### v0.1.0

- Remove `pangu` due to its arbitrary method especailly to dealing text like `时间: new Date(1608535223791)`.
- Supplyment for test information for `RuleTester`, see [`output (string, required if the rule fixes code)`](https://eslint.org/docs/developer-guide/nodejs-api#ruletester).
- Add peerDependencies.

### v0.0.2

First availuable version.

### v0.0.1

**deprecated**

> fatal bug fixed in v0.0.2
