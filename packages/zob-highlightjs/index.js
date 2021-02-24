'use strict'

const vue = require('./languages/vue')
const pug = require('./languages/pug')

module.exports = function (hljs, options = {}) {
  if (options.vue !== false) {
    hljs.registerLanguage('vue', vue)
  }
  if (options.pug !== false) {
    hljs.registerLanguage('pug', pug)
  }
}
