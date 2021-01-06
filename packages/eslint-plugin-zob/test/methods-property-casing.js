'use strict'

// describe('测试 eslint 规则', function () {
//   it('methods-property-casing 规则', function () {

    const rule = require('../lib/rules/methods-property-casing')
    const RuleTester = require('eslint').RuleTester
    const ruleTester = new RuleTester()

    ruleTester.run('methods-property-casing', rule, {
      valid: [
        {
          code: `
var demo = {
  methods: {
    test: 3
  }
}`
        }, {
          code: `
var demo = {
  methods: {
    'test': 3
  }
}`
        }, {
          code: 'function methods() { return 10 }'
        }, {
          code: `
var demo = {
  methods: {
    _a: function (params) {
      return 1
    },
    _0xt: 666
  }
}`
        }
      ],
      invalid: [
        {
          code: `
var demo = {
  methods: {
    Demo: function (params) {
      return 1
    },
    b: 666
  }
}`,
          errors: [{
            message: 'Identifier \'Demo\' is not in camel case.',
            type: 'Identifier'
          }]
        }, {
          code: `
var demo = {
  methods: {
    Demo: function (params) {
      return 1
    },
    _Test: 666
  }
}`,
          errors: [{
            message: 'Identifier \'Demo\' is not in camel case.',
            type: 'Identifier'
          }, {
            message: 'Identifier \'_Test\' is not in camel case.',
            type: 'Identifier'
          }]
        }, {
          code: `
var demo = {
  methods: {
    add_one: function (val) {
      return val + 1
    },
    'add-two': function (val) {
      return val + 2
    }
  }
}`,
          errors: [{
            message: 'Identifier \'add_one\' is not in camel case.',
            type: 'Identifier'
          }, {
            message: 'Literal \'add-two\' is not in camel case.',
            type: 'Literal'
          }]
        }, {
          code: `
var demo = {
  methods: {
    X,
    ['T'](){}
  }
}
`,
          parserOptions: {
            ecmaVersion: 6
          },
          errors: [{
            message: 'Identifier \'X\' is not in camel case.',
            type: 'Identifier'
          }, {
            message: 'Literal \'T\' is not in camel case.',
            type: 'Literal'
          }]
        }
      ]
    })
//   })
// })
