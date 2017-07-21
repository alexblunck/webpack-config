/**
 * Framework
 * react
 */

const path = require('path')
const webpack = require('webpack')

module.exports = function (env) {
    return {
        entry: {
            app: './src/index.ts'
        },
        resolve: {
            extensions: ['.js', '.ts']
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    exclude: /node_modules/,
                    loader: 'ts-loader'
                }
            ]
        },
        plugins: [
            // Workaround: https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(
              /angular(\\|\/)core(\\|\/)@angular/,
              path.resolve(env.root, 'src')
            )
        ]
    }
}
