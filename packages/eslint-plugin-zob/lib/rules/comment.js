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
    schema: [{
      type: 'object',
      properties: {
        punctuation: {
          type: 'boolean',
          default: false
        },
        quote: {
          type: 'boolean',
          default: false
        },
        colon: {
          type: 'boolean',
          default: false
        },
        conversation: {
          type: 'boolean',
          default: false
        },
        hashTopic: {
          type: 'boolean',
          default: false
        },
        operator: {
          type: 'boolean',
          default: false
        },
        middleDot: {
          type: 'boolean',
          default: false
        },
        percent: {
          type: 'boolean',
          default: false
        },
        alphabet: {
          type: 'boolean',
          default: true
        },
        number: {
          type: 'boolean',
          default: true
        },
        symbol: {
          type: 'boolean',
          default: true
        }
      }
    }]
  },
  create: function (context) {
    const options = context.options[0]
    const sourceCode = context.getSourceCode()
    return {
      Program() {
        sourceCode
          .getAllComments()
          .filter(({ type }) => type === 'Block' || type === 'Line')
          .forEach(node => {
            const { value, type } = node
            const result = typeset(value, options)
            if (result !== value) {
              context.report({
                node: node,
                message: 'Typeset or space need to be fixed.',
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
