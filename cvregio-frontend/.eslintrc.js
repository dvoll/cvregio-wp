module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        indent: ['error', 4],
        'import/extensions': ['error', 'ignorePackages', { tsx: 'never', ts: 'never' }],
        'prefer-destructuring': 'warn',
        'class-methods-use-this': 'off',

        'react/prefer-stateless-function': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-did-update-set-state': 'off',
        'react/state-in-constructor': ['warn', 'never'],
        'react/jsx-props-no-spreading': [
            'error',
            {
                html: 'enforce',
                custom: 'ignore',
            },
        ],
        'react/jsx-fragments': 'off',

        '@typescript-eslint/ban-ts-ignore': 'warn',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/camelcase': 'off',
    },

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.tsx'],
            },
        },
    },

    parserOptions: {
        parser: 'babel-eslint',
    },

    overrides: [
        {
            files: ['**/*.ts?(x)'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    ],
};
