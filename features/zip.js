/**
 * Feature
 * zip
 */

const git = require('git-repo-info')
const ZipPlugin = require('zip-webpack-plugin')

module.exports = function (env) {
    if (!env.name || !env.root) {
        throw 'webpack-config.features.zip: options.name & options.root is required!'
    }

    // Skip in development
    if (!env.production && !env.zip) {
        return
    }

    const commit = git(env.root).sha.substr(0, 7)

    return {
        plugins: [
            new ZipPlugin({
                filename: `${env.name}-${commit}.zip`,
                exclude: [
                    /(vendor|manifest).*map/,
                    /.*css\.map/,
                    /manifest\.json/
                ]
            })
        ]
    }
}
