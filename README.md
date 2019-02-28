# deploy-mern

Under :construction: :smiley_cat:

> I'll try my best to ALLWAYS apply **best practices** and highlight `what`, `how` and specially the `source` from which I got the inspiration.

English is also not my first language, so feel free to submit a pull request for any typos found

## What is This?
Minimal MERN stack open-source.

- `Front End` Vanilla React with Webpack and Babel.
- `Back End` Node with Express and MongoDB database.

## Who is intended for?
- Fell free to clone and work on your own projects
- All contributions are more than welcome, so please file an issue or pull request to make it awesome

--------------------------------
## Activities Log
### Basic project setup
- Make sure [node and npm](https://nodejs.org/en/) are installed then `$ node -v` and `$ npm -v`
- Create a project folder `Project` and `$ cd` into it
- Start git `$ git init`
- And launch the project with `$ npm init`

--------------------------------
## Milestones
- :construction: MVP: deploy `#deployMern` to Heroku using React (with Webpack and Babel) and Node (with Express and MongoDB)

--------------------------------
### Tools
- Webpack
- Babel
- React
- Node
- Express

--------------------------------
#### [Webpack](https://webpack.js.org/guides/getting-started/)
> It is a module bundler for modern JS apps. It scans the application, builds a [dependency graph](https://webpack.js.org/concepts/dependency-graph/) and generates one or more bundles.
- Install webpack locally ([recommended by webpack](https://webpack.js.org/guides/installation/)):`$npm install webpack webpack-cli --save-dev`

Despite that it is highly configurable, since version 4 it does not **requires** a configuration file `webpack.config.js`. Main points to understand Webpack:
1. Entry: Root of the **dependency graph**. By default is `./src/index.js` or you can configure it in the configuration file:
```javascript
// webpack.config.js
module.exports = {
  entry: './path/to/my/entry/file.js'
};
```
2. Output: Where to bundle, it defaults to `./dist/main.js`. It can be [configured](https://webpack.js.org/configuration/output) as:
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```
3. Loaders: Is what allows webpack to processes other types of files apart from JS and JSON, like CSS. They have two [properties](https://webpack.js.org/concepts/loaders):
	1. `test` which files should be transformed
	2. `use` which loader should be used
```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  output: {
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
};
```
> When defining rules, they must be under `module.rules`
4. Plugins: Used for a broad [range of tasks](https://webpack.js.org/api/plugins) like bundle optimization, asset management and injection of environment variables. [The plugins](https://webpack.js.org/plugins) have to be `require()` it calling with `new` under `plugins`:
```javascript
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};
```
5. Mode: It can be [configured](https://webpack.js.org/concepts/mode) as `production` (default), `development` or `none`:
```javascript
// webpack.config.js
module.exports = {
  mode: 'production'
};
```
6. Browser compatibility: It supports [all browsers that are ECMA5 compliant](https://kangax.github.io/compat-table/es5/). To support older browsers [polyfill](https://webpack.js.org/guides/shimming/) must be used in order to allow `Promises` for `import()` and `require.insure()`.
--------------------------------
### [Babel](https://babeljs.io/docs/en/index.html)

> It is a JS compiler that converts ECMAScript2015+ ➡️ backards compatible versions. It can:

- Install 
```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env

$ npm install --save @babel/polyfill
```

### [React]()

- Install React and React-dom: `$ npm install react react-dom`


### mLab


## References
- [1] [React architecture 1](https://daveceddia.com/react-project-structure/)
- [2] [2 Approaches setting MERN](https://developer.okta.com/blog/2018/01/11/two-approaches-to-setting-up-a-mern-stack-app)
- [3] [mern.io](http://mern.io/)