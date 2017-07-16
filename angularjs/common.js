/**
 * Webpack
 * Common
 */

const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const Md5HashPlugin = require('webpack-md5-hash')
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin')
const InlineChunkManifestHtmlWebpackPlugin = require('inline-chunk-manifest-html-webpack-plugin')
const StatsPlugin = require('stats-webpack-plugin')

module.exports = function (env) {
    return {
        entry: {
            app: './src/index.js',
        },
        output: {
            path: path.resolve(env.root, 'dist')
        },
        module: {
            rules: [
                // Html
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    options: {
                        minimize: true,
                        conservativeCollapse: false
                    }
                },
                // Svg
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        // Don't remove width / height attributes
                        removeSVGTagAttrs: false
                    }
                },
                // Babel
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader?cacheDirectory',
                    options: {
                        presets: [
                            // Skip module transpilation (Done by webpack)
                            ['env', {
                                modules: false,
                                targets: {
                                    browsers: 'last 2 versions'
                                }
                            }]
                        ],
                        plugins: [
                            'syntax-dynamic-import',
                            'angularjs-annotate'
                        ]
                    }
                }
            ]
        },
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    return module.context && module.context.indexOf("node_modules") !== -1;
                }
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'manifest',
                minChunks: Infinity
            }),
            new Md5HashPlugin(),
            new ChunkManifestPlugin(),
            new InlineChunkManifestHtmlWebpackPlugin({
                extractManifest: false
            }),
            new HtmlPlugin({
                template: 'src/index.html'
            }),
            (env.profile ? new StatsPlugin('stats.json', {
                chunkModules: true,
                exclude: [/node_modules/]
            }) : function(){})
        ],
        stats: {
            assetsSort: 'name',
            modules: false
        }
    }
}
