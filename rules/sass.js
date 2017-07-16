/**
 * Rule
 * sass
 */

const ExtractTextPlugin = require('extract-text-webpack-plugin')

/**
 * Returns sass rule.
 *
 * @param  {Boolean} options.production
 *
 * @return {Object}
 */
module.exports = function ({ production }) {
    const rule = {
        test: /\.scss$/,
        exclude: /node_modules/
    }

    const loaders = []

    // Add style-loader for development
    if (!production) {
        loaders.push({ loader: 'style-loader' })
    }

    // css-loader
    loaders.push({ loader: 'css-loader' })

    // postcss-loader
    loaders.push({
        loader: 'postcss-loader',
        options: {
            plugins: [
                require('autoprefixer')()
            ]
        }
    })

    // sass-loader
    loaders.push({ loader: 'sass-loader' })

    // Use ExtractTextPlugin in production
    if (production) {
        rule.use = ExtractTextPlugin.extract({
            use: loaders
        })
    } else {
        rule.use = loaders
    }

    return rule
}
