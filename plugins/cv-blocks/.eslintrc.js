module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        // "prettier/vue",
        "airbnb",
        "prettier",
        "prettier/react",
        "plugin:prettier/recommended"
    ],
    rules: {
        "react/jsx-filename-extension": [
            1,
            {
                "extensions": [".js", ".jsx"]
            }
        ],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "indent": [
            "error",
            4
        ]
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
};
