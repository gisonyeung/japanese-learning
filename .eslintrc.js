module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true
    },
    'extends': [
        // 'eslint:recommended',
        'plugin:react/recommended',
        // 'plugin:prettier/recommended',
        // 'plugin:css-modules/recommended',
    ],
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'process': 'readonly',
        '__dirname': 'readonly'
    },
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
            "modules": true,
            "experimentalObjectRestSpread": true
        },
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        // 'css-modules'
    ],
    'rules': {
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
        'indent': [
            'error',
            2
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}