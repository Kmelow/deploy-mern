# deploy-mern

Under :construction: :smiley_cat:

--------------------------------
## Welcome

This is a minimal MERN stack open-source.

- `Front End` Vanilla React with Webpack and Babel.
- `Back End` Node with Express and MongoDB database, using Mongoose.

## :man_shrugging: Who is intended for?
- `Developers` Fell free to clone and work on your own projects
- `Contributors` All contributions are more than welcome, so please file an issue or pull request to make it awesome

## :rocket: How to launch it?
### Setup mLab:
1. Create an [mLab](https://www.mlab.com/home) account
2. Create a new database-dev (for development)
3. Add database user inside the databases/Users
4. Inside `./config/keys-dev.js` (see [config](#config)) add an object to connect using the driver (provided on mLab.com/databases/database-dev) replacing the user and password (previously created)
```javascript
// ./config/keys-dev.js
module.exports = {
  mongoURI: 'mongodb://<dbuser>:<dbpassword>@ds.../database-dev'
}
```
5. Repeat 2. and 3. for database-prod (for production) and add the connection object to `./config/keys-prod.js`. The `process.env.MONGO_URI` will be linked later deployment (Heroku).
```javascript
// ./config/keys-prod.js
module.exports = {
  mongoURI: process.env.MONGO_URI
}
```

--------------------------------
## Contents (Further Reading)
- [Webpack](#Webpack)
- [Babel](#Babel)
- [React](#React)
- [Node](#Node)
- [Express](#Express)
- [Mongoose](#Mongoose)
- [Extra Packages](#Extra-Packages)
- [Security](#Security)
- [Milestones](#Milestones)
- [References](#References)

--------------------------------
## [Webpack](https://webpack.js.org/guides/getting-started/)
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
## [Babel](https://babeljs.io/docs/en/index.html)

> It is a JS compiler that converts ECMAScript2015+ ➡️ backards compatible versions. It can:

- Install 
```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env

$ npm install --save @babel/polyfill
```

--------------------------------
## [React]()

- Install React and React-dom: `$ npm install react react-dom`

--------------------------------
## Node
### `package.json`
Scripts:
- `npm run server`: It will run only the server using nodemon

--------------------------------
## Express
The express framework provides an instance [Router](http://expressjs.com/en/guide/routing.html). It is a middleware that allows to connect a routing system

--------------------------------
## [Mongoose](https://mongoosejs.com/)
To interface with MongoDB we are using [mongoose](https://mongoosejs.com/)

--------------------------------
## Extra Packages
- `body-parser` It is necessary, so that we can read the `body` data that comes into the server
- `concurrently` It is necessary so we can run simultaneously the server and the client
- `mongoose` Interact with MongoDB
- `nodemon` Automatically restarts the node app

--------------------------------
## Security
> Because security deserves its own section

### config
*Everytime something do NOT need to be commited, it is going to be added into `.gitignore` file.

This folder will contain the keys to the server tools.
It is also important that the development and production keys can be independent. So the `keys.js` will decide, depending on the environment, if it will use the development or production keys. *The development keys do not need to be commited

--------------------------------
## Milestones  :triangular_flag_on_post:
- :construction: MVP: deploy `#deployMern` to Heroku using React (with Webpack and Babel) and Node (with Express and MongoDB)


--------------------------------
## References
- [0] [Github Emoji Cheat Sheet](https://www.webfx.com/tools/emoji-cheat-sheet/)
- [1] [React architecture 1](https://daveceddia.com/react-project-structure/)
- [2] [2 Approaches setting MERN](https://developer.okta.com/blog/2018/01/11/two-approaches-to-setting-up-a-mern-stack-app)
- [3] [mern.io](http://mern.io/)