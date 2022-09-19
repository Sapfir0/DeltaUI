module.exports = {
  extends: ['eslint:recommended'].concat(
    ['./rules/index'].map(require.resolve)
  ),
  parser: '@babel/eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true,
      objectLiteralDuplicateProperties: false,
    },
  },
  ignorePatterns: [
    'src/components/**/*.stories.tsx',
    '*.config.ts',
    'dist/*',
    'rules/*',
    './.eslintrc.js',
  ],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      extends: ['./rules/babel'].map(require.resolve),
    },
  ],
}
