// babel.config.js
module.exports = {
    presets: ['@babel/preset-env'],
    plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        "@babel/plugin-syntax-dynamic-import",
        '@babel/plugin-transform-runtime'
    ]

};