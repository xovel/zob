'use strict'

module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
    browser: true,
    jquery: true
  },
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  rules: {
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 0,
    'no-await-in-loop': 0,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 1,
    'no-constant-condition': [
      2,
      {
        checkLoops: true
      }
    ],
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-keys': 2,
    'no-duplicate-case': 2,
    'no-empty': [
      2,
      {
        allowEmptyCatch: true
      }
    ],
    'no-empty-character-class': 2,
    'no-ex-assign': 2,
    'no-extra-boolean-cast': 1,
    'no-extra-parens': 0,
    'no-extra-semi': 1,
    'no-func-assign': 2,
    'no-inner-declarations': [
      2,
      'functions'
    ],
    'no-invalid-regexp': 2,
    'no-irregular-whitespace': [
      2,
      {
        skipStrings: true,
        skipComments: true,
        skipRegExps: true,
        skipTemplates: true
      }
    ],
    'no-misleading-character-class': 0,
    'no-obj-calls': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 0,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'use-isnan': 2,
    'require-atomic-updates': 1,
    'valid-typeof': 2,
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 0,
    complexity: 2,
    'consistent-return': 0,
    curly: [
      1,
      'multi-line',
      'consistent'
    ],
    'default-case': 0,
    'dot-location': [
      2,
      'property'
    ],
    'dot-notation': 0,
    eqeqeq: 2,
    'guard-for-in': 0,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': 1,
    'no-empty-pattern': 2,
    'no-eq-null': 1,
    'no-eval': 1,
    'no-extend-native': 0,
    'no-extra-bind': 1,
    'no-extra-label': 2,
    'no-fallthrough': 0,
    'no-floating-decimal': 2,
    'no-global-assign': 2,
    'no-implicit-coercion': 0,
    'no-implicit-globals': 0,
    'no-implied-eval': 2,
    'no-invalid-this': 0,
    'no-iterator': 2,
    'no-labels': 1,
    'no-lone-blocks': 2,
    'no-loop-func': 0,
    'no-magic-numbers': 0,
    'no-multi-spaces': [
      2,
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'no-multi-str': 1,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-wrappers': 1,
    'no-octal': 2,
    'no-octal-escape': 2,
    'no-param-reassign': 0,
    'no-proto': 2,
    'no-redeclare': [
      2,
      {
        builtinGlobals: true
      }
    ],
    'no-restricted-properties': 0,
    'no-return-assign': 0,
    'no-return-await': 2,
    'no-script-url': 0,
    'no-self-assign': 0,
    'no-self-compare': 2,
    'no-sequences': 1,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [
      1,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-labels': 2,
    'no-useless-call': 0,
    'no-useless-catch': 0,
    'no-useless-concat': 0,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 1,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-named-capture-group': 0,
    'prefer-promise-reject-errors': 0,
    radix: 1,
    'require-await': 2,
    'require-unicode-regexp': 0,
    'vars-on-top': 0,
    'wrap-iife': 0,
    yoda: 0,
    strict: 0,
    'init-declarations': 0,
    'no-catch-shadow': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': 1,
    'no-shadow-restricted-names': 0,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 0,
    'no-unused-vars': [
      2,
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true,
        caughtErrors: 'none'
      }
    ],
    'no-use-before-define': [
      1,
      {
        functions: false,
        variables: true,
        classes: true
      }
    ],
    'callback-return': 0,
    'global-require': 0,
    'handle-callback-err': 0,
    'no-buffer-constructor': 0,
    'no-mixed-requires': 0,
    'no-new-require': 2,
    'no-path-concat': 0,
    'no-process-env': 0,
    'no-process-exit': 0,
    'no-restricted-modules': 0,
    'no-sync': 0,
    'array-bracket-newline': [
      2,
      {
        multiline: true
      }
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'array-element-newline': [
      2,
      {
        multiline: true
      }
    ],
    'block-spacing': 2,
    'brace-style': [
      2,
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 0,
    'capitalized-comments': 0,
    'comma-dangle': 0,
    'comma-spacing': 2,
    'comma-style': 2,
    'computed-property-spacing': 2,
    'consistent-this': 0,
    'eol-last': 2,
    'func-call-spacing': 2,
    'func-name-matching': 0,
    'func-names': 0,
    'func-style': 0,
    'function-paren-newline': [
      2,
      'consistent'
    ],
    'id-blacklist': 0,
    'id-length': 0,
    'id-match': 0,
    'implicit-arrow-linebreak': 2,
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'jsx-quotes': 0,
    'key-spacing': 2,
    'keyword-spacing': 2,
    'line-comment-position': 0,
    'linebreak-style': 0,
    'lines-around-comment': 0,
    'lines-between-class-members': 0,
    'max-depth': 0,
    'max-len': 0,
    'max-lines': 0,
    'max-lines-per-function': 0,
    'max-nested-callbacks': 0,
    'max-params': 0,
    'max-statements': 0,
    'max-statements-per-line': 0,
    'multiline-comment-style': 0,
    'multiline-ternary': 0,
    'new-cap': 0,
    'new-parens': 2,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 0,
    'no-continue': 0,
    'no-inline-comments': 0,
    'no-lonely-if': 1,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 1,
    'no-multiple-empty-lines': [
      2,
      {
        max: 4,
        maxEOF: 4,
        maxBOF: 4
      }
    ],
    'no-negated-condition': 1,
    'no-nested-ternary': 0,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 2,
    'nonblock-statement-body-position': 0,
    'object-curly-newline': 0,
    'object-curly-spacing': 0,
    'object-property-newline': 0,
    'one-var': 0,
    'one-var-declaration-per-line': 0,
    'operator-assignment': 0,
    'operator-linebreak': 0,
    'padded-blocks': 0,
    'padding-line-between-statements': 0,
    'prefer-object-spread': 0,
    'quote-props': 0,
    quotes: [
      2,
      'single'
    ],
    semi: 0,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'semi-style': 2,
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': [
      2,
      'always'
    ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'space-in-parens': 2,
    'space-infix-ops': 2,
    'space-unary-ops': [
      2,
      {
        words: true,
        nonwords: false
      }
    ],
    'spaced-comment': [
      2,
      'always',
      {
        line: {
          markers: [
            '/'
          ],
          exceptions: [
            '-',
            '+'
          ]
        },
        block: {
          markers: [
            '!'
          ],
          exceptions: [
            '*'
          ],
          balanced: true
        }
      }
    ],
    'switch-colon-spacing': 2,
    'template-tag-spacing': 2,
    'unicode-bom': 0,
    'wrap-regex': 0,
    'arrow-body-style': 1,
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: false
      }
    ],
    'arrow-spacing': 2,
    'constructor-super': 1,
    'generator-star-spacing': [
      2,
      'before'
    ],
    'no-class-assign': 2,
    'no-confusing-arrow': 2,
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 0,
    'no-useless-rename': 0,
    'no-var': 0,
    'object-shorthand': 0,
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-destructuring': 0,
    'prefer-numeric-literals': 0,
    'prefer-rest-params': 0,
    'prefer-spread': 0,
    'prefer-template': 0,
    'require-yield': 2,
    'rest-spread-spacing': 2,
    'sort-imports': 0,
    'symbol-description': 2,
    'template-curly-spacing': 2,
    'yield-star-spacing': [
      2,
      'after'
    ]
  }
}
