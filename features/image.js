/**
 * Feature
 * images
 */

const path = require('path')

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|gif|mov)$/,
                    loader: 'file-loader',
                    include: path.resolve(env.root, 'src')
                }
            ]
        }
    }
}
