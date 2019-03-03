const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 9000
    },
    devtool: 'source-map',
    entry: path.resolve(__dirname, '..', 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.js', '.jsx', '.css'],
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader",
              }),
              exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src/index.html')
        }),
        new ExtractTextPlugin('style.css')
    ]
};
