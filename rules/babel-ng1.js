/**
 * Rule
 * babel-ng1
 */

module.exports = function (env) {
    return {
        module: {
            rules: [
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
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'angularjs-annotate'
                        ]
                    }
                }
            ]
        }
    }
}
