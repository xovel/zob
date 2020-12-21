# eslint-plugin-zob

ESLint plugin for zob system.

## Rules

### [`zob/comment`](docs/comment.md)

自动在注释中的中文字和半形的英文、数字、符号之间插入空白。

## History

### v0.1.0

- Remove `pangu` due to its arbitrary method especailly to dealing text like `时间: new Date(1608535223791)`.
- Supplyment for test information for `RuleTester`, see [`output (string, required if the rule fixes code)`](https://eslint.org/docs/developer-guide/nodejs-api#ruletester).
- Add peerDependencies.

### v0.0.2

First availuable version.

### v0.0.1

**deprecated**

> fatal bug fixed in v0.0.2
