/**
 * ECMAScript 6 config
 */

 module.exports = {
    plugins: ['import'],
    rules: {
      // Import
      // Static analysis
      'import/no-absolute-path': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-webpack-loader-syntax': 'error',
      'import/no-self-import': 'error',
      'import/no-useless-path-segments': [
        'error',
        {
          noUselessIndex: true,
        },
      ],
      // Helpful warnings
      'import/export': 'error',
      'import/no-mutable-exports': 'error',
      // Module systems
      'import/unambiguous': 'error',
      'import/no-commonjs': [
        'error',
        {
          allowRequire: false,
          allowPrimitiveModules: false,
        },
      ],
      'import/no-amd': 'error',
      // Style guide
      'import/first': 'error',
      'import/no-duplicates': 'error',
      'import/order': [
        'error',
        {
          'groups': [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
      'import/newline-after-import': 'error',
      'import/no-named-default': 'error',
      'import/no-anonymous-default-export': [
        'error',
        {
          allowArray: true,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: false,
          allowLiteral: false,
          allowObject: true,
        },
      ],
      'import/dynamic-import-chunkname': 'error',
  
      // Other
      'arrow-body-style': ['error', 'as-needed'],
      'arrow-parens': 'error',
      'arrow-spacing': 'error',
      'generator-star-spacing': [
        'error',
        {
          before: true,
          after: false,
        },
      ],
      'no-confusing-arrow': [
        'error',
        {
          allowParens: true,
        },
      ],
      'no-duplicate-imports': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-constructor': 'error',
      'no-useless-rename': 'error',
      'no-var': 'error',
      'object-shorthand': [
        'error',
        'always',
        {
          avoidQuotes: true,
        },
      ],
      'prefer-arrow-callback': [
        'error',
        {
          allowNamedFunctions: true,
        },
      ],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: true,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'prefer-numeric-literals': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'rest-spread-spacing': ['error', 'never'],
      'symbol-description': 'error',
      'template-curly-spacing': 'error',
      'yield-star-spacing': ['error', 'before'],
    },
  }
  