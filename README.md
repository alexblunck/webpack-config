# webpack-config

Modular collection of opinionated webpack configurations

## Prerequisites

1. Add `webback-config` as a submodule to your repository
2. Add a `webpack.config.js` file to the root of your project:

```js
const pkg = require('./package.json')

// Import the desired configuration
const config = require('./lib/webpack-config/angularjs')

module.exports = function(env) {
    return config(env, {
        name: pkg.name,
        root: __dirname
    })
}
```

3. Add scripts to your `package.json`:
```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack -p --env.production",
  "serve": "serve -s dist",
  "analyze": "webpack -p --env.production --env.analyze",
  "profile": "webpack -p --env.production --env.profile --profile"
},
```

4. Install dependencies required for all configurations:
```bash
yarn add --dev --exact autoprefixer, babel-core, babel-loader, babel-plugin-syntax-dynamic-import, babel-preset-env, chunk-manifest-webpack-plugin, clean-webpack-plugin, compression-webpack-plugin, css-loader, extract-text-webpack-plugin, git-repo-info, html-loader, html-webpack-plugin, inline-chunk-manifest-html-webpack-plugin, node-sass, open-browser-webpack-plugin, postcss-loader, sass-lint, sass-loader, serve, stats-webpack-plugin, style-loader, svg-inline-loader, webpack, webpack-bundle-analyzer, webpack-dev-server, webpack-md5-hash, webpack-merge, zip-webpack-plugin
```

## Config - Angularjs

Configuration for AngularJs 1.x projects

#### Dependencies
```bash
yarn add --dev --exact babel-plugin-angularjs-annotate
```
