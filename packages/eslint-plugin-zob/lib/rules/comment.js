'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

const typeset = require('../utils/typeset')

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Fix typeset in Chinese context for comments',
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
                message: 'Typeset or space need to be fixed',
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
