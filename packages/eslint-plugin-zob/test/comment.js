'use strict'

// describe('测试 eslint 规则', function () {
//   it('comment 规则', function () {
    const rule = require('../lib/rules/comment')
    const RuleTester = require('eslint').RuleTester
    const ruleTester = new RuleTester()

    ruleTester.run('comment', rule, {
      valid: [
        {
          code: `
/**
 * 测试示例 1
 *
 * @param {string} text 文本。参数不同于以往 a + b 的形式
 */
function demo(text) {

}
    `
        },
        `// 这一个针对 1=1 的猜想`
      ],
      invalid: [
        {
          code: `// 作者xovel`,
          errors: [{
            message: 'Need space',
            type: 'Line'
          }]
        },
        {
          code: `/* 我是一个demo */`,
          errors: [{
            message: 'Need space',
            type: 'Block'
          }]
        }
      ]
    })
//   })
// })
