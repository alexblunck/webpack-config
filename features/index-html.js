/**
 * Feature
 * index-html
 */

const HtmlPlugin = require('html-webpack-plugin')

module.exports = function (env) {
    return {
        plugins: [
            new HtmlPlugin({
                template: 'src/index.html'
            })
        ]
    }
}
