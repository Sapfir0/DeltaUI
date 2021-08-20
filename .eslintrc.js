module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        "react-hooks"
    ],
    "ignorePatterns": ["node_modules/", 'build/', '*.js', '.vscode/'],
    rules: {
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-explicit-any": 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-unused-vars": 'off',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
};