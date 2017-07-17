/**
 * Feature
 * compress
 */

const CompressionPlugin = require('compression-webpack-plugin')

module.exports = function (env) {
    // Skip in development
    if (!env.production) {
        return
    }

    return {
        plugins: [
            new CompressionPlugin({
                test: /\.(js|css)$/
            })
        ]
    }
}
