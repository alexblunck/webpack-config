/**
 * Webpack
 * Production
 */

const git = require('git-repo-info')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const ZipPlugin = require('zip-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const sassRule = require('../rules/sass')

module.exports = function (env) {
    const sha = git(env.root).sha.substr(0, 7)

    return {
        output: {
            filename: '[name].[chunkhash].js',
            chunkFilename: '[name].[chunkhash].js'
        },
        devtool: 'hidden-source-map',
        module: {
            rules: [
                sassRule({ production: true })
            ]
        },
        plugins: [
            new CleanPlugin(['dist'], {
                root: env.root,
                verbose: false
            }),
            new ExtractTextPlugin({
                filename: '[name].[contenthash].css',
                allChunks: true
            }),
            new CompressionPlugin({
                test: /\.(js|css)$/
            }),
            new ZipPlugin({
                filename: `${env.name}-${sha}.zip`,
                exclude: [
                    /(vendor|manifest).*map/,
                    /.*css\.map/,
                    /manifest\.json/
                ]
            }),
            new BundleAnalyzerPlugin({
                analyzerMode: env.analyze ? 'server' : 'disabled'
            })
        ]
    }
}
