/**
 * Feature
 * index-html
 */

const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')

module.exports = function (env) {
    return {
        plugins: [
            new HtmlPlugin({
                template: path.join(env.root, 'src/index.html')
            })
        ]
    }
}
