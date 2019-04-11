const path = require('path');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

const productionConfig = {
    mode: 'production',
    entry: {
        polyfills: path.resolve(__dirname, 'polyfills.js'),
        app: './src/index.jsx',
    },
    output: {
        filename: 'js/[name].[hash].js',
        chunkFilename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist/portal'),
        publicPath: '/'
    },
    module: {

    },
    optimization: {
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    plugins: [
        new Visualizer({
            filename: '../stats/index.html'
        }),
    ],
    devtool: 'source-map'
};


module.exports = merge(baseConfig, productionConfig);