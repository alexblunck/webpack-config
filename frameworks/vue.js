/**
 * Framework
 * vue
 */

module.exports = function (env) {
    return {
        entry: {
            app: './src/index.js'
        },
        resolve: {
            extensions: ['.js', '.vue'],
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        devtool: 'eval-source-map',
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.js$/,
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
                            }]
                        ]
                    }
                }
            ]
        }
    }
}
