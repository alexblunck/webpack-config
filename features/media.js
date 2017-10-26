/**
 * Feature
 * media
 */

const path = require('path')

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.(png|gif|mp4)$/,
                    loader: 'file-loader',
                    include: path.resolve(env.root, 'src')
                }
            ]
        }
    }
}
