/**
 * Framework
 * react
 */

const path = require('path')

module.exports = function (env) {
    const entry = {
        app: [ path.join(env.root, 'src/index.jsx') ]
    }

    const babelPlugins = [
        // require('babel-plugin-syntax-dynamic-import'),
        // require('babel-plugin-transform-react-jsx-img-import'),
        // require('babel-plugin-inline-react-svg')
    ]

    // Hot module replacement
    if (!env.production) {
        entry.app.unshift('react-hot-loader/patch')
        babelPlugins.unshift('react-hot-loader/babel')
    }

    return {
        entry: entry,
        resolve: {
            extensions: ['.js', '.jsx']
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: [
                            ['env', {
                                // Skip module transpilation (Done by webpack)
                                modules: false,
                                targets: {
                                    browsers: 'last 2 versions'
                                }
                            }],
                            'react'
                        ],
                        plugins: babelPlugins
                    }
                }
            ]
        }
    }
}
