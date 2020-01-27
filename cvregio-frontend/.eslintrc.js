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
        'react/prefer-stateless-function': 'off',
        'prefer-destructuring': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-filename-extension': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-did-update-set-state': 'off',
        'react/state-in-constructor': ['warn', 'never'],
        '@typescript-eslint/ban-ts-ignore': 'warn',

        'import/extensions': ['error', 'ignorePackages', { tsx: 'never', ts: 'never' }],

        'react/jsx-fragments': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        // 'react/jsx-props-no-spreading': [
        //     {
        //         html: 'enforce',
        //         custom: 'ignore',
        //     },
        // ],
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
