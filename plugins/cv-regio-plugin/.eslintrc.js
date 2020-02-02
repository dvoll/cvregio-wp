module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:prettier/recommended'],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'react/prefer-stateless-function': 'off',
        'prefer-destructuring': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'warn',
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'ignore',
            },
        ],
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};