'use strict'

const vue = require('./languages/vue')
const pug = require('./languages/pug')

module.exports = function (hljs) {
  hljs.registerLanguage('vue', vue)
  hljs.registerLanguage('pug', pug)
}
