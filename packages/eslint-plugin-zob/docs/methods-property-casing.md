# zob/methods-property-casing

确保在对象 `methods` 中的键值名匹配正则表达式 `/^(?:(?:\$*|_*)[a-z]|_\d)[a-zA-Z0-9]*_*$/u`。

注意，该规则忽略下划线 `_` 和 `$` 开头的值，但不能混用，并且允许下划线结尾。

> 显而易见的是，该规则是针对 `vue` 组件中的方法名进行的一个制约，并且要求使用小驼峰命名风格。

检测的场景如下：

1. 直接字段标识属性。`demo: ...`
2. 字面量属性。`'add-one': ...`
3. 字面量形式表现的计算属性。`['T']: ...`

其他场景，如动态属性 `[METHOD_ONE]() {}`，计算表达式属性 `['a' + 'b']: ...` 等不做考虑。

## Options

- `allow` (string[]) 允许白名单，支持正则表达式。

## Correct

```js
var demo = {
  methods: {
    test: 3
  }
}
```

```js
var demo = {
  methods: {
    'test': 3
  }
}
```

```js
var demo = {
  methods: {
    _a: function (params) {
      return 1
    },
    _0xt: 666
  }
}
```

## Incorrect

```js
var demo = {
  methods: {
    Demo: function (params) {
      return 1
    },
    b: 666
  }
}
```

```js
var demo = {
  methods: {
    Demo: function (params) {
      return 1
    },
    _Test: 666
  }
}
```

```js
var demo = {
  methods: {
    add_one: function (val) {
      return val + 1
    },
    'add-two': function (val) {
      return val + 2
    }
  }
}
```

```js
var demo = {
  methods: {
    X,
    ['T']() {}
  }
}
```

## 参考

- [camelcase](https://eslint.org/rules/camelcase)
