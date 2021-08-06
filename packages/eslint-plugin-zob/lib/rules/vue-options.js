'use strict'

/**
 * Gets the parent node of the given node. This method returns a value ignoring `X as F`.
 * @param {Expression} node
 * @returns {ASTNode}
 */
function getParent(node) {
  let parent = node.parent
  while (parent.type === 'TSAsExpression') {
    parent = parent.parent
  }
  return parent
}

/**
 * Retrieve `TSAsExpression#expression` value if the given node a `TSAsExpression` node. Otherwise, pass through it.
 * @template T Node type
 * @param {T | TSAsExpression} node The node to address.
 * @returns {T} The `TSAsExpression#expression` value if the node is a `TSAsExpression` node. Otherwise, the node.
 */
function skipTSAsExpression(node) {
  if (!node) {
    return node
  }
  // @ts-expect-error
  if (node.type === 'TSAsExpression') {
    // @ts-expect-error
    return skipTSAsExpression(node.expression)
  }
  // @ts-expect-error
  return node
}

/**
 * Check whether the given node is a Vue component based
 * on the filename and default export type
 * export default {} in .vue || .jsx
 * @param {ESNode} node Node to check
 * @param {string} path File name with extension
 * @returns {boolean}
 */
function isVueComponentFile(node, path) {
  return (
    isVueFile(path) &&
    node.type === 'ExportDefaultDeclaration' &&
    node.declaration.type === 'ObjectExpression'
  )
}

/**
 * @param {string} path
 */
function isVueFile(path) {
  return path.endsWith('.vue') || path.endsWith('.jsx')
}

/**
 * Check whether the given object is an export default Vue component.
 * @param {RuleContext} context The ESLint rule context object.
 * @param {ObjectExpression} node Node to check
 * @returns {boolean}
 */
function isDefaultExportVueFile(context, node) {
  if (node.type === 'ObjectExpression') {
    const parent = getParent(node)
    if (parent.type === 'ExportDefaultDeclaration') {
      const filename = context.getFilename()
      if (
        isVueComponentFile(parent, filename) &&
        skipTSAsExpression(parent.declaration) === node
      ) {
        return true
      }
    }
  }
  return false
}

/**
 * Gets the string of a given node.
 * @param {Literal|TemplateLiteral} node - The node to get.
 * @param {boolean} [stringOnly]
 * @return {string|null} The string if static. Otherwise, null.
 */
function getStringLiteralValue(node, stringOnly) {
  if (node.type === 'Literal') {
    if (node.value == null) {
      if (!stringOnly && node.bigint != null) {
        return node.bigint
      }
      return null
    }
    if (typeof node.value === 'string') {
      return node.value
    }
    if (!stringOnly) {
      return String(node.value)
    }
    return null
  }
  if (node.type === 'TemplateLiteral') {
    if (node.expressions.length === 0 && node.quasis.length === 1) {
      return node.quasis[0].value.cooked
    }
  }
  return null
}

/**
 * Gets the property name of a given node.
 * @param {Property} node - The node to get.
 * @return {string|null} The property name if static. Otherwise, null.
 */
function getStaticPropertyName(node) {
  if (!node.computed) {
    const key = node.key
    if (key.type === 'Identifier') {
      return key.name
    }
  }
  const key = node.key
  // @ts-expect-error
  return getStringLiteralValue(key)
}

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

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------
module.exports = {
  meta: {
    type: 'problem',
    dosc: {
      description: 'Enforce the options for vue component to be a vaild object value.',
      category: 'Possible Errors',
      url: 'https://github.com/xovel/zob/blob/master/packages/eslint-plugin-zob/docs/vue-options.md'
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
      invalidKey: "Invalid key '{{name}}'."
    }
  },
  create(context) {
    const options = context.options[0] || {}
    const allowList = vueDefaultOptions.concat(options.allow || [])

    /**
     * Checks if a string match the ignore list
     * @param {string} name The string to check.
     * @returns {boolean} if the string is ignored
     * @private
     */
    function isAllowed(name) {
      return allowList.includes(name)
    }

    return {
      'ObjectExpression:exit'(node) {
        if (isDefaultExportVueFile(context, node)) {
          for (const item of node.properties) {
            if (item.type === 'Property') {
              const name = getStaticPropertyName(item)
              if (
                name &&
                !isAllowed(name)
              ) {
                context.report({
                  node: item,
                  messageId: 'invalidKey',
                  data: {
                    name
                  }
                })
              }
            }
          }
        }
      }
    }
  }
}
