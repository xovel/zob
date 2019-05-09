'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const pangu = require('pangu')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '格式化注释中的中文',
      category: 'Stylistic Issues',
      url: 'https://xovel.cn/zob/rules/comment.html'
    },
    fixable: 'whitespace',
    schema: [] // no options
  },
  create: function (context) {
    const sourceCode = context.getSourceCode()
    return {
      Program() {
        sourceCode
          .getAllComments()
          .filter(token => token.type !== 'Shebang')
          .forEach(node => {
            const value = node.value
            const result = pangu.spacing(value)
            if (result !== value) {
              // 盘古之白
              context.report({
                node: node,
                message: 'Need space',
                fix: function (fixer) {
                  return fixer.replaceText(node, result)
                }
              })
            }
          })
      }
    }
  }
}
