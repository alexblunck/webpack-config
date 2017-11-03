/**
 * Feature
 * core
 */

const path = require('path')

module.exports = function (env) {
    if (!env.root) {
        throw 'webpack-config.features.core: options.root is required!'
    }

    const filename = env.production ? '[name].[chunkhash].js' : '[name].js'

    return {
        entry: {
            app: './src/index.js',
        },
        resolve: {
            // Fixes potential issues with "npm link". I.e. babel looking for plugins
            // in linked package node_modules.
            symlinks: false
        },
        output: {
            path: path.resolve(env.root, 'dist'),
            filename: filename,
            chunkFilename: filename
        }
    }
}
