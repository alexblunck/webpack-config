/**
 * Feature
 * clean
 */

const CleanPlugin = require('clean-webpack-plugin')

module.exports = function (env) {
    // Skip in development
    if (!env.production) {
        return {}
    }

    return {
        plugins: [
            new CleanPlugin(['dist'], {
                root: env.root,
                verbose: false
            })
        ]
    }
}
