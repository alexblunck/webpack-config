/**
 * Feature
 * profile
 */

const WebpackMonitor = require('webpack-monitor')

module.exports = function (env) {
    if (env.profile) {
        return {
            plugins: [
                new WebpackMonitor({
                    target: '../.webpack-monitor/stats.json',
                    launch: true
                })
            ]
        }
    }

    return {}
}
