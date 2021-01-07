'use strict'

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: "enforce the casing of property for methods",
      category: 'Stylistic Issues',
      url: 'https://github.com/xovel/zob/blob/master/packages/eslint-plugin-zob/docs/methods-property-casing.md'
    },
    schema: [{
      type: 'object',
      properties: {
        allow: {
          type: 'array',
          items: [{
            type: 'string'
          }],
          minItems: 0,
          uniqueItems: true
        }
      },
      additionalProperties: false
    }],
    messages: {
      notCamelCase: "{{type}} '{{name}}' is not in camel case."
    }
  },
  create: function (context) {

    const options = context.options[0] || {}
    const allow = options.allow || []

    const shorthandList = []

    /**
     * Checks if a string match the ignore list
     * @param {string} name The string to check.
     * @returns {boolean} if the string is ignored
     * @private
     */
    function isAllowed(name) {
      return allow.some(
        entry => name === entry || name.match(new RegExp(entry, 'u'))
      )
    }

    /**
     * Checks if a node is a property of `methods`
     * @param {ASTNode} node The node to check.
     * @returns {boolean} if the node is a property of `methods`
     * @private
     */
    function isPropertyOfMethods(node) {
      const parent = node.parent
      if (!parent) {
        return false
      }
      if (parent.type !== 'Property') {
        return false
      }
      if (parent.key !== node) {
        return false
      }
      if (node.type === 'Identifier' && parent.shorthand) {
        if (shorthandList.some(item => item === node)) {
          return false
        } else {
          shorthandList.push(node)
        }
      }
      if (node.type === 'Identifier' && parent.computed) {
        return false
      }
      const grandParent = parent.parent
      if (!grandParent) {
        return false
      }
      if (grandParent.type !== 'ObjectExpression') {
        return false
      }
      const greateGrandParent = grandParent.parent
      if (!greateGrandParent) {
        return false
      }
      if (greateGrandParent.type !== 'Property') {
        return false
      }
      if (!greateGrandParent.key || greateGrandParent.key.name !== 'methods') {
        return false
      }
      if (greateGrandParent.parent && greateGrandParent.parent.type === 'ObjectExpression') {
        return true
      }
      return false
    }

    const reCamelCase = /^(?:(?:\$*|_*)[a-z]|_\d)[a-zA-Z0-9]*_*$/u

    /**
     * Checks if a string is camelCase.
     * @param {string} name The string to check.
     * @returns {boolean} the name is camelCase
     * @private
     */
    function isCamelCase(name) {
      return reCamelCase.test(name)
    }

    /**
     * Checker
     * @param {ASTNode} node The node to check.
     * @param {string} name The string to check.
     * @private
     */
    function checkCamelCase(node, name) {
      // Ignore the node if it match the ignore list
      if (isAllowed(name)) {
        return
      }

      if (isCamelCase(name)) {
        return
      }

      context.report({
        node,
        messageId: 'notCamelCase',
        data: {
          name,
          type: node.type
        }
      })
    }

    return {
      Identifier(node) {
        if (isPropertyOfMethods(node)) {
          checkCamelCase(node, node.name)
        }
      },
      Literal(node) {
        if (isPropertyOfMethods(node)) {
          checkCamelCase(node, node.value)
        }
      }
    }
  }
}
