/**
 * Feature
 * html
 */

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        conservativeCollapse: false
                    }
                }
            ]
        }
    }
}
