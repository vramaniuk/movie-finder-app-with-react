const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';
const NODE_ENV = process.env.NODE_ENV;
module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `[name].js`,
        publicPath: '/'
    },
    watch: !isProduction,
    devtool: !isProduction && 'cheap-inline-module-source-map',
    devServer: {
        port: 9000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html')
        }),
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify(NODE_ENV)}
        })

    ]
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}