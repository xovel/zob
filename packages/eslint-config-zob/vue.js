'use strict'

module.exports = {
  extends: [
    './index.js'
  ],
  plugins: [
    'vue'
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
    'vue/html-self-closing': 0,
    'vue/max-attributes-per-line': 0,
    'vue/multiline-html-element-content-newline': 0,
    'vue/mustache-interpolation-spacing': 0,
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
    'vue/require-prop-types': 1,
    'vue/singleline-html-element-content-newline': 0,
    'vue/v-bind-style': [
      2,
      'shorthand'
    ],
    'vue/v-on-style': [
      2,
      'shorthand'
    ],
    'vue/attributes-order': 0,
    'vue/no-v-html': 1,
    'vue/order-in-components': 2,
    'vue/this-in-template': [
      2,
      'never'
    ]
  }
}
