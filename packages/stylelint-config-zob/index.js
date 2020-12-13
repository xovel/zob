'use strict'

module.exports = {
  root: true,
  ignoreDisables: true,
  rules: {
    'color-no-invalid-hex': true,
    'font-family-no-duplicate-names': [
      true,
      {
        ignoreFontFamilyNames: []
      }
    ],
    'font-family-no-missing-generic-family-keyword': null,
    'function-calc-no-invalid': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'string-no-newline': true,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: [],
        ignoreFunctions: []
      }
    ],
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [],
        checkPrefixed: true
      }
    ],
    'keyframe-declaration-no-important': true,
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: [
          'consecutive-duplicates-with-different-values'
        ]
      }
    ],
    'declaration-block-no-shorthand-property-overrides': true,
    'block-no-empty': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: []
      }
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: [
          'v-deep'
        ]
      }
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: [
          '/deep/'
        ]
      }
    ],
    'media-feature-name-no-unknown': [
      true,
      {
        ignoreMediaFeatureNames: []
      }
    ],
    'at-rule-no-unknown': true,
    'comment-no-empty': true,
    'no-descending-specificity': true,
    'no-duplicate-at-import-rules': true,
    'no-duplicate-selectors': true,
    'no-empty-source': true,
    'no-extra-semicolons': true,
    'no-invalid-double-slash-comments': true,
    'alpha-value-notation': 'number',
    'hue-degree-notation': 'number',
    'color-function-notation': null,
    'color-named': null,
    'color-no-hex': null,
    'length-zero-no-unit': [
      true,
      {
        ignore: [
          'custom-properties'
        ]
      }
    ],
    'font-weight-notation': null,
    'function-allowed-list': null,
    'function-disallowed-list': null,
    'function-url-no-scheme-relative': null,
    'function-url-scheme-allowed-list': null,
    'function-url-scheme-disallowed-list': null,
    'function-whitelist': null,
    'keyframes-name-pattern': null,
    'number-max-precision': [
      2,
      {
        ignoreUnits: [
          '%',
          'em',
          'px'
        ]
      }
    ],
    'time-min-milliseconds': null,
    'unit-allowed-list': null,
    'unit-disallowed-list': null,
    'shorthand-property-no-redundant-values': true,
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: [
          'grab',
          'max-content'
        ]
      }
    ],
    'custom-property-pattern': null,
    'property-allowed-list': null,
    'property-disallowed-list': null,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'transform',
          'columns'
        ]
      }
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [
          '/flex-/'
        ]
      }
    ],
    'declaration-no-important': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-unit-disallowed-list': null,
    'declaration-property-value-allowed-list': null,
    'declaration-property-value-disallowed-list': null,
    'declaration-block-single-line-max-declarations': 4,
    'selector-attribute-name-disallowed-list': null,
    'selector-attribute-operator-allowed-list': null,
    'selector-attribute-operator-disallowed-list': null,
    'selector-class-pattern': null,
    'selector-combinator-allowed-list': null,
    'selector-combinator-disallowed-list': null,
    'selector-id-pattern': null,
    'selector-max-attribute': 2,
    'selector-max-class': 5,
    'selector-max-combinators': 5,
    'selector-max-compound-selectors': 5,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-pseudo-class': 2,
    'selector-max-specificity': '1,5,3',
    'selector-max-type': [
      3,
      {
        ignore: [
          'child',
          'compounded',
          'next-sibling'
        ]
      }
    ],
    'selector-max-universal': 1,
    'selector-nested-pattern': null,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: [
          'attribute',
          'class'
        ]
      }
    ],
    'selector-no-vendor-prefix': [
      true,
      {
        ignoreSelectors: [
          '/-moz-.*/'
        ]
      }
    ],
    'selector-pseudo-class-allowed-list': null,
    'selector-pseudo-class-disallowed-list': null,
    'selector-pseudo-element-allowed-list': null,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-disallowed-list': null,
    'media-feature-name-allowed-list': null,
    'media-feature-name-disallowed-list': null,
    'media-feature-name-no-vendor-prefix': null,
    'media-feature-name-value-allowed-list': null,
    'custom-media-pattern': null,
    'at-rule-allowed-list': null,
    'at-rule-disallowed-list': null,
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-required-list': null,
    'comment-pattern': null,
    'comment-word-disallowed-list': null,
    'max-nesting-depth': [
      3,
      {
        ignore: [
          'blockless-at-rules',
          'pseudo-classes'
        ],
        ignoreAtRules: [
          'media'
        ]
      }
    ],
    'no-unknown-animations': true,
    'color-hex-case': 'lower',
    'color-hex-length': [
      'short',
      {
        severity: 'warning'
      }
    ],
    'font-family-name-quotes': 'always-where-required',
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'always-single-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never',
    'function-max-empty-lines': 0,
    'function-name-case': [
      'lower',
      {
        ignoreFunctions: []
      }
    ],
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': null,
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-no-trailing-zeros': true,
    'string-quotes': [
      'double',
      {
        avoidEscape: false
      }
    ],
    'unit-case': null,
    'value-keyword-case': 'lower',
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never',
    'value-list-max-empty-lines': 0,
    'custom-property-empty-line-before': [
      'always',
      {
        except: [
          'after-custom-property',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'property-case': 'lower',
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': 'always-multi-line',
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': [
      'always',
      {
        except: [
          'after-declaration',
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'inside-single-line-block'
        ]
      }
    ],
    'declaration-block-semicolon-newline-after': 'always-multi-lin',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-empty-line-before': 'never',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': 'never',
    'block-closing-brace-space-before': 'always-single-line',
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': 'never-single-line',
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': null,
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: [
          'first-nested'
        ],
        ignore: [
          'after-comment'
        ]
      }
    ],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-case': 'lower',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-after-same-name-blockless',
          'first-nested'
        ],
        ignore: [
          'after-comment'
        ],
        ignoreAtRules: [
          'import'
        ]
      }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'comment-empty-line-before': [
      'always',
      {
        except: [
          'first-nested'
        ],
        ignore: [
          'after-comment',
          'stylelint-commands'
        ]
      }
    ],
    'comment-whitespace-inside': 'always',
    indentation: [
      2,
      {
        baseIndentLevel: 1,
        indentInsideParens: 'once-at-root-twice-in-block'
      }
    ],
    linebreaks: null,
    'max-empty-lines': 1,
    'max-line-length': null,
    'no-eol-whitespace': true,
    'no-missing-end-of-source-newline': true,
    'no-empty-first-line': true,
    'unicode-bom': null
  }
}
