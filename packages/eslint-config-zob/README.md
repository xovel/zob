# eslint-config-zob

ESLint Config for zob system.

## Changelog

### v0.1.0

- Upgrade `parserOptions.ecmaVersion` to `2021`.
- Add `mocha`, `amd` to `env`.
- Specify parser `babel-eslint`.
- Remove `no-console`.
- Set `no-constant-condition` options `checkLoops` to `false`.
- Add `no-extra-parens`.
- Add `dot-notation`.
- Remove node rules.
- Add `no-loop-func`.
- Remove `array-bracket-newline`.
- Remove `array-element-newline`.
- Add `quote-props`.
- Add `arrow-body-style`.
- Add `object-shorthand`.
- Add `prefer-const`, `no-var`.
- Add `vue/html-self-closing`.
- Add `vue/mustache-interpolation-spacing`.
- Add `vue/require-prop-types`.
- Add `vue/attributes-order`.
- Add `vue/component-tags-order`.
- Add `vue/component-name-in-template-casing`.
- Add `vue/eqeqeq`.
- Add `vue/space-infix-ops`.
- Add `vue/space-unary-ops`.
- Sync new rules in `eslint` v7.

### v0.0.5

- Add `array-bracket-newline`.
- Add `array-element-newline`.
- Add `function-paren-newline`.
- Add options for `no-unused-vars`.

### v0.0.4

- Remove missed vue rules (not published yet).

### v0.0.3

- Disable `dot-notation`.

### v0.0.2

#### Config

- Add parser opitons.
- Complete config rules for vue.

#### Rules

- Allow `.catch` in `dot-notation`.
- Disable `object-curly-spacing`.
- Set `requireForBlockBody` to `false` in `arrow-parens`.

### v0.0.1

First version.
