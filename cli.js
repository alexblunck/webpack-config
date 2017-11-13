#!/usr/bin/env node

const path = require('path')
const argv = require('yargs').argv
const webpack = require('webpack')
const merge = require('webpack-merge')
const configFile = require('config-file')

const command = argv._[0]

const options = configFile('.webpackrc')

const env = {
    name: options.name,
    root: path.dirname(configFile.resolve('.webpackrc')),
    port: options.port,
    production: argv.p,
    favicon: null,
    profile: false,
    zip: false
}

let framework = null

if (options.type === 'react') {
    framework = require('./frameworks/react')
}

const config = merge(
    {
        context: __dirname
    },
    require('./features')(env),
    framework(env)
)

const compiler = webpack(config)

// console.log(env)

if (command === 'build') {
    compiler.run((err, stats) => {
        if (err) {
            console.error(err)
            return
        }

        const output = stats.toString({
            colors: true
        })

        console.log(output)
    })
}

// const defaults = {
//     name: null,
//     root: null,
//     port: null,
//     production: false,
//     favicon: null,
//     profile: false,
//     zip: false
// }

// const env = Object.assign({}, defaults, env)

// const config = merge(
//     require('./features')(env),
//     require('./frameworks/react')(env)
// )

// webpack(react)
