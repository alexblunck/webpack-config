/**
 * Feature
 * dev-server
 */

const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')

module.exports = function (env) {
    // Skip in production
    if (env.production) {
        return
    }

    const port = env.port || 8080

    return {
        devServer: {
            port: port,
            historyApiFallback: true,
            compress: true,
            inline: true,
            hot: true,
            overlay: true,
            stats: 'errors-only',
            clientLogLevel: 'none'
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({
                url: `http://localhost:${port}`,
                browser: 'Google Chrome'
            })
        ]
    }
}
