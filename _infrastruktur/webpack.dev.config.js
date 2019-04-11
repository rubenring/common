const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const devConfig = {
    mode: 'development',
    entry: {
        polyfills: path.resolve(__dirname, 'polyfills.js'),
        app: './src/index.jsx',
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist/lib'),
        publicPath: '/'
    },
    module: {
    },
    optimization: {},
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss'],
        alias: {
            //React-Hot-Loader: react-🔥-dom patch is not detected. React 16.6+ features may not work.
            'react-dom': '@hot-loader/react-dom'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist/lib'),
        compress: true,
        historyApiFallback: true,
        port: 3001,
        inline: true,
        hot: true,
        open: true
    },
    devtool: 'eval'
};
module.exports = merge(baseConfig, devConfig);
