/**
 * Feature
 * sass
 */

const autoprefixer = require('autoprefixer')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = function (env) {

    const extractSass = new ExtractTextPlugin({
        filename: '[name].[contenthash].css',
        allChunks: true,
        disable: !env.production
    })

    const loaders = [
        { loader: 'css-loader' },
        {
            loader: 'postcss-loader',
            options: {
                plugins: [autoprefixer()]
            }
        },
        { loader: 'sass-loader' }
    ]

    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: /node_modules/,
                    use: extractSass.extract({
                        use: loaders,
                        fallback: 'style-loader'
                    })
                }
            ]
        },
        plugins: [
            extractSass
        ]
    }
}
