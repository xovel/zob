/**
 * @fileoverview ESLint plugin for zob system.
 * @author xovel
 */

'use strict'

module.exports = {
  rules: {
    comment: require('./rules/comment'),
    typeset: require('./rules/comment'),
    'methods-property-casing': require('./rules/methods-property-casing'),
    'vue-options': require('./rules/vue-options')
  }
}
