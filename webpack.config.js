const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devtool: !isProduction && 'cheap-inline-module-source-map',
    devServer: {
        port: 9000,
        historyApiFallback: true,
        contentBase: __dirname + '/src'
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/, use: ['url-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        })
    ],
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
        })
    );
}
