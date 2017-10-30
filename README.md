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
  "profile": "webpack -p --env.production --env.profile"
},
```

4. Install dependencies required for all configurations:
```bash
npm install --save-dev --save-exact autoprefixer babel-core babel-loader babel-plugin-syntax-dynamic-import babel-preset-env clean-webpack-plugin compression-webpack-plugin css-loader extract-text-webpack-plugin file-loader git-repo-info html-loader html-webpack-plugin inline-chunk-manifest-html-webpack-plugin node-sass postcss-loader sass-lint sass-loader serve style-loader svg-inline-loader webpack webpack-dev-server webpack-md5-hash webpack-merge zip-webpack-plugin webpack-monitor favicons-webpack-plugin
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
npm install --save-dev --save-exact babel-preset-react babel-plugin-transform-react-jsx-img-import react-hot-loader
```

**Hot Module Replacement**

Wrap your root application component in an `AppContainer` component & modify your dom rendering logic similar to the following:
```js
import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('app')
    )
}

// Render to the dom
render()

// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./components/App', render)
}
```

### Config - Vue 2+
```js
const config = require('./lib/webpack-config/vue')
```

**Specific Dependencies**
```bash
npm install --save-dev --save-exact vue-loader
```
