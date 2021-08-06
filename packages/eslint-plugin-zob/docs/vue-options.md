# zob/vue-options

检测 `.vue` 或者 `.jsx` 文件中的默认导出对象是否符合 Vue 组件选项要求。

目前只支持默认导出这一行为的组件选项检测，其他场景如 `Vue.component('my-component', {...})`、`new Vue({...})` 等暂不纳入支持范围。

Vue 默认支持的组件选项为：

```js
const vueDefaultOptions = [
  // Data
  'data',
  'props',
  'propsData',
  'computed',
  'methods',
  'watch',
  // DOM
  'el',
  'template',
  'render',
  'renderError',
  // Lifecycle
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'activated',
  'decativated',
  'beforeDestroy',
  'destroyed',
  'errorCaptured',
  // Vue router guard
  'beforeRouteEnter',
  'beforeRouteUpdate',
  'beforeRouteLeave',
  // Assets
  'directives',
  'filters',
  'components',
  // Composition
  'parent',
  'mixins',
  'extends',
  'provide',
  'inject',
  // Misc
  'name',
  'delimiters',
  'functional',
  'model',
  'inheritAttrs',
  'comments',
  // Vue3
  'emits',
  'beforeUnmount',
  'unmounted',
  'renderTracked',
  'renderTriggered',
  'setup',
  'compilerOptions'
]
```

## Options

- `allow` (string[]) 允许白名单，数字元素类型为字符串。

## Correct

```js
export default {
  name: 'Demo',
  data() {
    return {
      text: 'Hello, world!'
    }
  },
  methods: {
    changeText() {
      this.text = 'Hello, zob!'
    }
  }
}
```

```js
export default {
  data() {
    return {
      bar: ''
    }
  },
  computed: {
    foo() {
      return this.bar + '777'
    }
  },
  beforeMount() {
    this.bar = 'aaa'
  },
  destroyed() {
    this.bar = ''
  }
}
```

## Incorrect

```js
export default {
  filters: {
    format(v) {
      return Number(v).toFixed(2)
    }
  },
  major(version) {
    return this.version + version
  }
}
```

```js
export default {
  data() {
    return {
      foo: 'aaa',
      bar: 'bbb'
    }
  },
  init() {
    console.log('inited')
  },
  created() {
    console.log('created')
  },
  clicked() {
    console.log('clicked')
  },
  method: {
    fly() {
      this.foo = 'fly'
    }
  }
}
```

## 参考

- [API - Vue.js](https://vuejs.org/v2/api/)
- [Options API - Vue.js](https://v3.vuejs.org/api/options-api.html)
