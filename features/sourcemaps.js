/**
 * Feature
 * sourcemaps
 */

const webpack = require('webpack')

module.exports = function (env) {
    // Production
    if (env.production) {
        return {
            devtool: 'hidden-source-map'
        }
    }
    // Development
    else {
        return {
            devtool: 'eval-source-map',
            plugins: [
                new webpack.EvalSourceMapDevToolPlugin({
                    filename: '[file].map',
                    exclude: ['vendor.js']
                })
            ]
        }
    }
}
