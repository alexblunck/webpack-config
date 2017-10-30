/**
 * Feature
 * index
 */

const merge = require('webpack-merge')

module.exports = function (env) {
    return merge(
        require('./core')(env),
        require('./clean')(env),
        require('./index-html')(env),
        require('./vendor-chunk')(env),
        require('./html')(env),
        require('./sass')(env),
        require('./svg')(env),
        require('./media')(env),
        require('./favicon')(env),
        require('./sourcemaps')(env),
        require('./compress')(env),
        require('./zip')(env),
        require('./dev-server')(env),
        require('./profile')(env)
    )
}
