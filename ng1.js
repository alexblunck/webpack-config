/**
 * Config
 * ng1
 */

const merge = require('webpack-merge')

const defaults = {
    name: null,
    root: null,
    production: false,
    analyze: false,
    profile: false
}

module.exports = function (env, options) {
    env = Object.assign({}, defaults, env, options)

    return merge(
        // Features
        require('./features/core')(env),
        require('./features/clean')(env),
        require('./features/index-html')(env),
        require('./features/vendor-chunk')(env),
        require('./features/html')(env),
        require('./features/sass')(env),
        require('./features/svg')(env),
        require('./features/sourcemaps')(env),
        require('./features/compress')(env),
        require('./features/zip')(env),
        require('./features/dev-server')(env),
        require('./features/analyze')(env),
        require('./features/stats')(env),
        require('./rules/babel-ng1')(env)
    )
}
