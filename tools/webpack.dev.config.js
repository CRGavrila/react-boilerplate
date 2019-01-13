const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devServer: {
        port: 9000
    },
    devtool: 'source-map',
    // entry: './src/index.js',
    entry: path.join(__dirname, '..', 'src/index.js'),
    output: {
        path: path.resolve(__dirname, '..', 'build'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'src/index.html')
        })
    ]
};
