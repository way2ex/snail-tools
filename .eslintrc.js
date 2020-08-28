module.exports = {
    env: {
        node: true,
        es2020: true,
    },
    extends: [
        'eslint:recommended',
        'standard',
        'plugin:@typescript-eslint/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
    },
    plugins: [
        'standard',
        '@typescript-eslint',
    ],
    rules: {
        semi: ['error', 'never'],
        'comma-dangle': ['error', 'always-multiline'],
        indent: ['error', 4],
        '@typescript-eslint/no-var-requires': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
    },
}
