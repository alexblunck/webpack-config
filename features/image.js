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
                    test: /\.png$/,
                    loader: 'file-loader',
                    include: path.resolve(env.root, 'src')
                }
            ]
        }
    }
}
