/**
 * @fileoverview ESLint plugin for zob system.
 * @author xovel
 */

'use strict'

module.exports = {
  rules: {
    comment: require('./rules/comment'),
    typeset: require('./rules/comment')
  }
}
