/**
 * Framework
 * react
 */

module.exports = function (env) {
    return {
        entry: {
            app: './src/index.jsx',
        },
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
                        plugins: [
                            'syntax-dynamic-import',
                            'transform-react-jsx-img-import'
                        ]
                    }
                }
            ]
        }
    }
}
