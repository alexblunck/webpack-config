/**
 * Feature
 * favicon
 */

const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = function (env) {
    if (!env.favicon) {
        return {}
    }

    return {
        plugins: [
            new FaviconsWebpackPlugin({
                logo: env.favicon,
                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: false,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    windows: false,
                    yandex: false
                }
            })
        ]
    }
}
