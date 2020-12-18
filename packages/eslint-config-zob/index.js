'use strict'

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
    jquery: true,
    amd: true,
    mocha: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  rules: {
    'for-direction': 2,
    'getter-return': 2,
    'no-async-promise-executor': 2,
    'no-await-in-loop': 1,
    'no-compare-neg-zero': 2,
    'no-cond-assign': 2,
    'no-console': 0,
    'no-constant-condition': [
      2,
      {
        checkLoops: false
      }
    ],
    'no-control-regex': 2,
    'no-debugger': 2,
    'no-dupe-args': 2,
    'no-dupe-else-if': 2,
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
    'no-extra-boolean-cast': 2,
    'no-extra-parens': [
      2,
      'all',
      {
        conditionalAssign: false,
        returnAssign: false,
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false
      }
    ],
    'no-extra-semi': 2,
    'no-func-assign': 2,
    'no-import-assign': 2,
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
    'no-loss-of-precision': 2,
    'no-misleading-character-class': 2,
    'no-obj-calls': 2,
    'no-promise-executor-return': 2,
    'no-prototype-builtins': 2,
    'no-regex-spaces': 2,
    'no-setter-return': 2,
    'no-sparse-arrays': 2,
    'no-template-curly-in-string': 2,
    'no-unexpected-multiline': 2,
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'no-unsafe-finally': 2,
    'no-unsafe-negation': 2,
    'no-unsafe-optional-chaining': 2,
    'no-useless-backreference': 2,
    'require-atomic-updates': 2,
    'use-isnan': 2,
    'valid-typeof': 2,
    'accessor-pairs': 2,
    'array-callback-return': 2,
    'block-scoped-var': 2,
    'class-methods-use-this': 0,
    complexity: 2,
    'consistent-return': 0,
    curly: [
      2,
      'multi-line',
      'consistent'
    ],
    'default-case': 2,
    'default-case-last': 2,
    'default-param-last': 2,
    'dot-location': [
      2,
      'property'
    ],
    'dot-notation': [
      2,
      {
        allowKeywords: true
      }
    ],
    eqeqeq: 2,
    'grouped-accessor-pairs': 2,
    'guard-for-in': 1,
    'max-classes-per-file': 0,
    'no-alert': 1,
    'no-caller': 2,
    'no-case-declarations': 2,
    'no-constructor-return': 2,
    'no-div-regex': 2,
    'no-else-return': 2,
    'no-empty-function': [
      2,
      {
        allow: [
          'functions',
          'setters',
          'getters',
          'asyncFunctions'
        ]
      }
    ],
    'no-empty-pattern': 2,
    'no-eq-null': 2,
    'no-eval': 1,
    'no-extend-native': 0,
    'no-extra-bind': 2,
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
    'no-loop-func': 2,
    'no-magic-numbers': [
      0,
      {
        ignore: [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          12,
          24,
          60,
          100,
          200,
          300,
          1000,
          1500,
          3000
        ],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
        detectObjects: true
      }
    ],
    'no-multi-spaces': [
      2,
      {
        ignoreEOLComments: true,
        exceptions: {
          Property: true,
          BinaryExpression: true,
          VariableDeclarator: true,
          ImportDeclaration: true
        }
      }
    ],
    'no-multi-str': 2,
    'no-new': 1,
    'no-new-func': 1,
    'no-new-wrappers': 1,
    'no-nonoctal-decimal-escape': 2,
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
    'no-return-assign': 2,
    'no-return-await': 2,
    'no-script-url': 2,
    'no-self-assign': 0,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unmodified-loop-condition': 2,
    'no-unused-expressions': [
      2,
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }
    ],
    'no-unused-labels': 2,
    'no-useless-call': 0,
    'no-useless-catch': 2,
    'no-useless-concat': 0,
    'no-useless-escape': 2,
    'no-useless-return': 2,
    'no-void': 1,
    'no-warning-comments': 0,
    'no-with': 2,
    'prefer-named-capture-group': 0,
    'prefer-promise-reject-errors': 0,
    'prefer-regex-literals': 2,
    radix: 2,
    'require-await': 2,
    'require-unicode-regexp': 0,
    'vars-on-top': 0,
    'wrap-iife': 0,
    yoda: 0,
    strict: 0,
    'init-declarations': 0,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': [
      2,
      {
        builtinGlobals: true,
        hoist: 'functions',
        allow: [
          'err',
          'error',
          'resolve',
          'reject',
          'done',
          'callback',
          'cb'
        ]
      }
    ],
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 2,
    'no-undefined': 2,
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
      2,
      {
        functions: false,
        classes: true,
        variables: true
      }
    ],
    'array-bracket-newline': [
      0,
      {
        multiline: true,
        minItems: 2
      }
    ],
    'array-bracket-spacing': [
      2,
      'never'
    ],
    'array-element-newline': [
      0,
      'consistent'
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
    'function-call-argument-newline': [
      2,
      'consistent'
    ],
    'function-paren-newline': [
      2,
      'consistent'
    ],
    'id-denylist': 0,
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
    'no-lonely-if': 2,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 2,
    'no-multi-assign': 2,
    'no-multiple-empty-lines': [
      2,
      {
        max: 4,
        maxEOF: 4,
        maxBOF: 4
      }
    ],
    'no-negated-condition': 2,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-tabs': 2,
    'no-ternary': 0,
    'no-trailing-spaces': 2,
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': 2,
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
    'prefer-exponentiation-operator': 0,
    'prefer-object-spread': 0,
    'quote-props': [
      2,
      'as-needed'
    ],
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
    'arrow-body-style': [
      2,
      'as-needed'
    ],
    'arrow-parens': [
      2,
      'as-needed',
      {
        requireForBlockBody: false
      }
    ],
    'arrow-spacing': 2,
    'constructor-super': 2,
    'generator-star-spacing': [
      2,
      'before'
    ],
    'no-class-assign': 2,
    'no-confusing-arrow': [
      2,
      {
        allowParens: true
      }
    ],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': 2,
    'no-new-symbol': 2,
    'no-restricted-exports': 0,
    'no-restricted-imports': 0,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 2,
    'no-useless-rename': 2,
    'no-var': 2,
    'object-shorthand': [
      2,
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: true,
        avoidExplicitReturnArrows: true
      }
    ],
    'prefer-arrow-callback': 0,
    'prefer-const': 2,
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
