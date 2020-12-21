'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const typeset = require('../utils/typeset')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: '自动在注释中的中文字和半形的英文、数字、符号之间插入空白。',
      category: 'Stylistic Issues',
      url: 'https://github.com/xovel/zob/blob/master/packages/eslint-plugin-zob/docs/comment.md'
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
          .filter(({type}) => type === 'Block' || type === 'Line')
          .forEach(node => {
            const {value, type} = node
            const result = typeset(value)
            if (result !== value) {
              context.report({
                node: node,
                message: 'Need space',
                fix: function (fixer) {
                  return fixer.replaceText(node, type === 'Block' ? `/*${result}*/` : `//${result}`)
                }
              })
            }
          })
      }
    }
  }
}
