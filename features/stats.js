/**
 * Feature
 * stats
 */

const StatsPlugin = require('stats-webpack-plugin')

module.exports = function (env) {
    const plugins = []

    if (env.profile) {
        plugins.push(
            new StatsPlugin('stats.json', {
                chunkModules: true,
                exclude: [/node_modules/]
            })
        )
    }

    return {
        plugins: plugins,
        stats: {
            assetsSort: 'name',
            modules: false
        }
    }
}
