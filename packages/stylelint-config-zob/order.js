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
        'content',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
        'box-sizing',
        'float',
        'clear',
        'display',
        'flex',
        'flex-direction',
        'justify-content',
        'order',
        'grid',
        'table-layout',
        'list-style',
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'padding',
        'border',
        'border-radius',
        'border-collapse',
        'outline',
        'margin',
        'color',
        'background',
        'background-image',
        'background-color',
        'background-size',
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
        'font-family',
        'font-size',
        'text-overflow',
        'white-space',
        'word-wrap',
        'word-break',
        'line-break',
        'text-align',
        'text-justify',
        'line-height',
        'letter-spacing',
        'word-spacing',
        'text-transform',
        'quotes',
        'text-indent',
        'text-decoration',
        'text-emphasis',
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
        'user-select'
      ],
      {
        unspecified: 'ignore'
      }
    ],
    'order/properties-alphabetical-order': null
  }
}
