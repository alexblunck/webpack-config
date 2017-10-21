/**
 * Framework
 * react
 */

module.exports = function (env) {
    const entry = {
        app: [ './src/index.jsx' ]
    }

    const babelPlugins = [
        'syntax-dynamic-import',
        'transform-react-jsx-img-import'
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
        devtool: 'eval',
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
