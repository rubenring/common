const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

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
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    }, 
                    'css-loader',
                    'sass-loader'
                ],
            },
            {
                test: /\.(svg|eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader',
                exclude: [/resources/],
                options: {
                    name: '[name].[ext]?[hash]',
                    outputPath: 'fonts/'
                }
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/, 
                    name: 'vendors', 
                    chunks: 'all',
                    reuseExistingChunk: true
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            },
        },
        minimizer: [
            new TerserJSPlugin({}),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new Visualizer({
            filename: '../stats/index.html'
        }),
        new HtmlWebpackPlugin({
            template: 'resources/index_template.html',
            filename: 'index.html',
            favicon: 'resources/favicon.ico',
            chunksSortMode: 'manual',
            chunks: ['polyfills', 'vendors', 'app'],
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: './css/[name].[hash].css',
            chunkFilename: './css/[id].[hash].css',
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devtool: 'source-map'
};


module.exports = productionConfig;