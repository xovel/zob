'use strict'

module.exports = {
  extends: [
    './index.js'
  ],
  plugins: [
    'stylelint-order'
  ],
  rules: {
    'order/order': [
      [
        'custom-properties',
        'dollar-variables',
        'at-variables',
        'declarations',
        'less-mixins',
        'rules',
        'at-rules'
      ],
      {
        disableFix: false,
        unspecified: 'ignore'
      }
    ],
    'order/properties-order': [
      [
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'float',
        'clear',
        'display',
        'flex',
        'order',
        'grid',
        'table-layout',
        'list-style',
        'box-sizing',
        'width',
        'height',
        'padding',
        'border',
        'border-radius',
        'outline',
        'margin',
        'color',
        'background',
        'isolation',
        'clip-path',
        'mask',
        'filter',
        'box-shadow',
        'opacity',
        'visibility',
        'overflow',
        'vertical-align',
        'columns',
        'writing-mode',
        'direction',
        'font',
        'text-overflow',
        'white-space',
        'word-wrap',
        'word-break',
        'line-break',
        'text-align',
        'letter-spacing',
        'word-spacing',
        'text-transform',
        'quotes',
        'text-indent',
        'text-emphasis',
        'text-decoration',
        'text-shadow',
        'transform',
        'perspective',
        'backface-visibility',
        'transition',
        'animation',
        'scroll-behavior',
        'resize',
        'cursor',
        'touch-action',
        'caret-color',
        'ime-mode',
        'object-fit',
        'content',
        'user-select'
      ],
      {
        unspecified: 'ignore'
      }
    ],
    'order/properties-alphabetical-order': null
  }
}
