const path = require('path');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `bundle.js`,
        publicPath: '/'
    },
    watch: !isProduction,
    devtool: !isProduction && 'cheap-inline-module-source-map',
    devServer: {
        port: 9000,
        historyApiFallback: true,
        contentBase: 'src/'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test:   /\.styl$/,
                loader: 'style!css!stylus'
            }, {
                test:   /\.css$/,
                loader: 'style!css!'
            },
        ]
    },
    plugins: [],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.js']
    },
    resolveLoader: {
        modulesDirectories: ['node_modules'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    },
};

if (isProduction) {
    module.exports.plugins.push(
        new webpack.DefinePlugin({
            'process.env': {'NODE_ENV': JSON.stringify('production')}
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
        })
    );
}