/**
 * Feature
 * svg
 */

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader',
                    options: {
                        removeTags: true,
                        // Don't remove width / height attributes
                        removeSVGTagAttrs: false
                    }
                }
            ]
        }
    }
}
