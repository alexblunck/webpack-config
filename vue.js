/**
 * Config
 * vue
 */

const merge = require('webpack-merge')

const defaults = {
    name: null,
    root: null,
    port: null,
    production: false,
    favicon: null,
    profile: false,
    zip: false
}

module.exports = function (env, options) {
    env = Object.assign({}, defaults, env, options)

    return merge(
        require('./features')(env),
        require('./frameworks/vue')(env)
    )
}
