# webpack-config
Modular collection of opinionated webpack configurations.

## Setup

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
        port: 3000
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
npm install --save-dev --save-exact autoprefixer babel-core babel-loader babel-plugin-syntax-dynamic-import babel-preset-env chunk-manifest-webpack-plugin@1.1.0 clean-webpack-plugin compression-webpack-plugin css-loader extract-text-webpack-plugin file-loader git-repo-info html-loader html-webpack-plugin inline-chunk-manifest-html-webpack-plugin node-sass open-browser-webpack-plugin postcss-loader sass-lint sass-loader serve stats-webpack-plugin style-loader svg-inline-loader webpack webpack-bundle-analyzer webpack-dev-server webpack-md5-hash webpack-merge zip-webpack-plugin
```

### Config - AngularJs 1.6+
```js
const config = require('./lib/webpack-config/ng1')
```

**Specific Dependencies**
```bash
npm install --save-dev --save-exact babel-plugin-angularjs-annotate
```

### Config - Angular 4+
```js
const config = require('./lib/webpack-config/ng')
```

**Specific Dependencies**
```bash
npm install --save-dev --save-exact ts-loader typescript
```

### Config - React
```js
const config = require('./lib/webpack-config/react')
```

**Specific Dependencies**
```bash
npm install --save-dev --save-exact babel-preset-react babel-plugin-transform-react-jsx-img-import
```
