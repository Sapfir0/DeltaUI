/**
 * Common config
 */

 module.exports = {
    plugins: ['babel'],
    rules: {
      // Possible Errors
      'no-console': [
        'warn',
        {
          allow: [
            'warn',
            'error',
            'info',
          ],
        },
      ],
      'no-debugger': 'warn',
      'no-extra-parens': [
        'error',
        'all',
        {
          nestedBinaryExpressions: false,
          ignoreJSX: 'all',
          enforceForArrowConditionals: false,
          enforceForSequenceExpressions: false,
        },
      ],
      'no-loss-of-precision': 'error',
      'no-template-curly-in-string': 'error',
      'no-useless-backreference': 'error',
      'require-atomic-updates': 'error',
      'valid-typeof': [
        'error',
        {
          requireStringLiterals: true,
        },
      ],
  
      // Best Practices
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'consistent-return': 'error',
      'curly': 'error',
      'default-case-last': 'error',
      'dot-location': ['error', 'property'],
      'dot-notation': 'error',
      'eqeqeq': 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'max-classes-per-file': 'error',
      'no-alert': 'warn',
      'no-caller': 'error',
      'no-constructor-return': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'warn',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': 'error',
      'no-implicit-globals': 'error',
      'no-implied-eval': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignore: [
            -1,
            0,
            0.5,
            1,
            2,
            100,
          ],
          ignoreArrayIndexes: true,
          detectObjects: false,
        },
      ],
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-param-reassign': [
        'error',
        {
          props: false,
        },
      ],
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'prefer-promise-reject-errors': 'error',
      'radix': 'error',
      'require-await': 'error',
      'yoda': [
        'error',
        'never',
        {
          exceptRange: true,
        },
      ],
  
      // Variables
      'no-label-var': 'error',
      'no-restricted-globals': ['error', 'event'],
      'no-undef-init': 'error',
      'no-unused-vars': [
        'error',
        {
          ignoreRestSiblings: true,
          argsIgnorePattern: '^_',
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
        },
      ],
  
      // Stylistic Issues
      'array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],
      'array-bracket-spacing': ['error', 'never'],
      'array-element-newline': [
        'error',
        {
          multiline: true,
          minItems: 3,
        },
      ],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs'],
      'camelcase': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'consistent-this': ['error', 'self'],
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'func-names': 'error',
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'function-call-argument-newline': ['error', 'consistent'],
      'function-paren-newline': ['error', 'consistent'],
      'implicit-arrow-linebreak': ['error', 'beside'],
      'indent': [
        'error',
        2,
        {
          SwitchCase: 1,
        },
      ],
      'jsx-quotes': ['error', 'prefer-single'],
      'jsdoc/require-param': 'off',
      'jsdoc/require-returns': 'off',
      'key-spacing': [
        'error',
        {
          mode: 'strict',
        },
      ],
      'keyword-spacing': 'error',
      'linebreak-style': 'error',
      'lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterSingleLine: true,
        },
      ],
      'max-nested-callbacks': ['error', 4],
      'max-statements-per-line': 'error',
      'new-cap': [
        'error',
        {
          capIsNew: false,
        },
      ],
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'no-unneeded-ternary': 'error',
      'no-whitespace-before-property': 'error',
      'object-curly-newline': [
        'error',
        {
          ObjectExpression: {
            minProperties: 1,
          },
          ObjectPattern: {
            multiline: true,
          },
          ImportDeclaration: {
            multiline: true,
          },
          ExportDeclaration: {
            multiline: true,
          },
        },
      ],
      'object-curly-spacing': ['error', 'always'],
      'object-property-newline': [
        'error',
        {
          allowAllPropertiesOnSameLine: false,
        },
      ],
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': ['error', 'initializations'],
      'operator-assignment': ['error', 'always'],
      'operator-linebreak': [
        'error',
        'before',
        {
          overrides: {
            '=': 'after',
          },
        },
      ],
      'padded-blocks': ['error', 'never'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: 'import',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'import',
          next: 'import',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'block-like',
        },
        {
          blankLine: 'always',
          prev: 'block-like',
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: ['const', 'let'],
          next: '*',
        },
        {
          blankLine: 'never',
          prev: ['singleline-const', 'singleline-let'],
          next: ['singleline-const', 'singleline-let'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-const', 'multiline-let'],
          next: ['multiline-const', 'multiline-let'],
        },
        {
          blankLine: 'always',
          prev: ['cjs-import'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['cjs-import'],
          next: ['cjs-import'],
        },
      ],
      'prefer-object-spread': 'error',
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      'semi': ['error', 'never'],
      'space-before-blocks': 'error',
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],
      'space-in-parens': 'error',
      'space-infix-ops': [
        'error',
        {
          int32Hint: true,
        },
      ],
      'space-unary-ops': 'error',
      'spaced-comment': 'error',
      'switch-colon-spacing': 'error',
      'template-tag-spacing': 'error',
      'unicode-bom': 'error',
    },
  }
  