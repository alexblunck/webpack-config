# webpack-config

Modular collection of opinionated webpack configurations

## Guide

1. Add `webback-config` as a submodule to your repository
2. Add a `webpack.config.js` file to the root of your project:

```js
const pkg = require('./package.json')

// Import desired config
const config = require('./lib/webpack-config/ng1')

module.exports = function (env) {
    return config(env, {
        name: pkg.name,
        root: __dirname,
        port: 8080
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
  "profile": "webpack -p --profile --env.production --env.profile"
},
```

4. Install dependencies required for all configurations:
```bash
yarn add --dev --exact autoprefixer babel-core babel-loader babel-plugin-syntax-dynamic-import babel-preset-env chunk-manifest-webpack-plugin clean-webpack-plugin compression-webpack-plugin css-loader extract-text-webpack-plugin file-loader git-repo-info html-loader html-webpack-plugin inline-chunk-manifest-html-webpack-plugin node-sass open-browser-webpack-plugin postcss-loader sass-lint sass-loader serve stats-webpack-plugin style-loader svg-inline-loader webpack webpack-bundle-analyzer webpack-dev-server webpack-md5-hash webpack-merge zip-webpack-plugin
```


## Config - ng1

Configuration for AngularJs 1.x projects

#### Specific Dependencies
```bash
yarn add --dev --exact babel-plugin-angularjs-annotate
```


## Config - ng

Configuration for Angular 2+ projects

#### Specific Dependencies
```bash
yarn add --dev --exact ts-loader typescript
```


## Config - react

Configuration for react projects

#### Specific Dependencies
```bash
yarn add --dev --exact babel-preset-react babel-plugin-transform-react-jsx-img-import
```
