/**
 * Webpack
 * Development
 */

const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const sassRule = require('../rules/sass')

const port = process.env.port || 8080

module.exports = function (env) {
    return {
        output: {
            filename: '[name].js',
            chunkFilename: '[name].js'
        },
        devtool: 'eval-source-map',
        devServer: {
            port: port,
            historyApiFallback: true,
            compress: true,
            hot: true,
            overlay: true,
            clientLogLevel: 'none'
        },
        module: {
            rules: [
                sassRule({ production: false })
            ]
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.EvalSourceMapDevToolPlugin({
                filename: '[file].map',
                exclude: ['vendor.js']
            }),
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({
                url: `http://localhost:${port}`,
                browser: 'Google Chrome'
            })
        ]
    }
}
