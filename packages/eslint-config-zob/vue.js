'use strict'

module.exports = {
  extends: [
    'plugin:vue/base',
    './index.js'
  ],
  rules: {
    'vue/comment-directive': 2,
    'vue/jsx-uses-vars': 2,
    'vue/no-async-in-computed-properties': 2,
    'vue/no-dupe-keys': 2,
    'vue/no-duplicate-attributes': 2,
    'vue/no-parsing-error': 2,
    'vue/no-reserved-keys': 2,
    'vue/no-shared-component-data': 2,
    'vue/no-side-effects-in-computed-properties': 2,
    'vue/no-template-key': 2,
    'vue/no-textarea-mustache': 2,
    'vue/no-unused-components': 2,
    'vue/no-unused-vars': 2,
    'vue/no-use-v-if-with-v-for': 2,
    'vue/require-component-is': 2,
    'vue/require-prop-type-constructor': 2,
    'vue/require-render-return': 2,
    'vue/require-v-for-key': 2,
    'vue/require-valid-default-prop': 2,
    'vue/return-in-computed-property': 2,
    'vue/use-v-on-exact': 2,
    'vue/valid-template-root': 2,
    'vue/valid-v-bind': 2,
    'vue/valid-v-cloak': 2,
    'vue/valid-v-else-if': 2,
    'vue/valid-v-else': 2,
    'vue/valid-v-for': 2,
    'vue/valid-v-html': 2,
    'vue/valid-v-if': 2,
    'vue/valid-v-model': 2,
    'vue/valid-v-on': 2,
    'vue/valid-v-once': 2,
    'vue/valid-v-pre': 2,
    'vue/valid-v-show': 2,
    'vue/valid-v-text': 2,
    'vue/attribute-hyphenation': 2,
    'vue/html-closing-bracket-newline': [
      2,
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': [
      2,
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always'
      }
    ],
    'vue/html-end-tags': 2,
    'vue/html-indent': 2,
    'vue/html-quotes': [
      2,
      'double'
    ],
    'vue/html-self-closing': [
      2,
      {
        html: {
          void: 'always',
          normal: 'never'
        }
      }
    ],
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 2,
    'vue/name-property-casing': [
      2,
      'PascalCase'
    ],
    'vue/no-multi-spaces': 2,
    'vue/no-spaces-around-equal-signs-in-attribute': 2,
    'vue/no-template-shadow': 2,
    'vue/prop-name-casing': [
      2,
      'camelCase'
    ],
    'vue/require-default-prop': 2,
    'vue/require-prop-types': 2,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': [
      2,
      'shorthand'
    ],
    'vue/v-on-style': [
      2,
      'shorthand'
    ],
    'vue/attributes-order': 2,
    'vue/component-tags-order': [
      2,
      {
        order: [
          'docs',
          'template',
          'i18n',
          'script',
          'style'
        ]
      }
    ],
    'vue/no-v-html': 1,
    'vue/order-in-components': 2,
    'vue/this-in-template': [
      2,
      'never'
    ],
    'vue/array-bracket-spacing': [
      2,
      'never'
    ],
    'vue/arrow-spacing': 2,
    'vue/block-spacing': 2,
    'vue/brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    'vue/camelcase': 0,
    'vue/comma-dangle': 2,
    'vue/component-name-in-template-casing': [
      2,
      'kebab-case'
    ],
    'vue/dot-location': [
      2,
      'property'
    ],
    'vue/eqeqeq': 2,
    'vue/key-spacing': 2,
    'vue/keyword-spacing': 2,
    'vue/match-component-file-name': 0,
    'vue/no-boolean-default': 2,
    'vue/no-deprecated-scope-attribute': 1,
    'vue/no-empty-pattern': 2,
    'vue/no-restricted-syntax': 0,
    'vue/object-curly-spacing': 0,
    'vue/require-direct-export': 0,
    'vue/script-indent': 0,
    'vue/space-infix-ops': 2,
    'vue/space-unary-ops': 2,
    'vue/v-on-function-call': 0,
    'vue/v-slot-style': 0,
    'vue/valid-v-slot': 2
  }
}
