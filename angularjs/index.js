/**
 * Webpack
 * Config
 */

const merge = require('webpack-merge')
const common = require('./common')
const dev = require('./dev')
const prod = require('./prod')

const defaultEnv = {
    name: null,
    root: null,
    production: false,
    analyze: false,
    profile: false
}

const requiredOptions = ['root', 'name']

module.exports = function (env = {}, options) {
    env = Object.assign(defaultEnv, env, options)

    requiredOptions.forEach(option => {
        if (!env[option]) {
            throw `webpack-config: options.${option} needs to be set!`
        }
    })

    if (env.production) {
        return merge(common(env), prod(env))
    } else {
        return merge(common(env), dev(env))
    }
}
