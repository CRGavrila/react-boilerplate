
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const jsonLoader = {
    test: /\.json$/,
    loader: 'json-loader'
}
const jsLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
}

const jsxLoader = {
    test: /\.jsx$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
}

const cssLoader = {
    test: /\.css$/,
    use: ['style-loader', 'css-loader', 'postcss-loader'],
    exclude: /node_modules/
}

const scssLoader = {
  test: /\.scss$/,
  use: ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: "css-loader!sass-loader",
  }),
  exclude: /node_modules/,
}

module.exports = {
    development: [
        jsonLoader,
        jsLoader,
        jsxLoader,
        cssLoader,
        cssLoader,
        scssLoader,
    ],
    production: [

    ],
};