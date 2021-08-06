'use strict'

const rule = require('../lib/rules/vue-options')
const RuleTester = require('eslint').RuleTester

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  }
})

ruleTester.run('vue-options', rule, {
  valid: [
    {
      filename: 'test.vue',
      code: `
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
      `
    },
    {
      filename: 'test.vue',
      code: `
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
      `
    }
  ],
  invalid: [
    {
      filename: 'test.vue',
      code: `
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
      `,
      errors: [
        "Invalid key 'major'."
      ]
    },
    {
      filename: 'test.vue',
      code: `
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
      `,
      errors: [
        "Invalid key 'init'.",
        "Invalid key 'clicked'.",
        "Invalid key 'method'."
      ]
    }
  ]
})
