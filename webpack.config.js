const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
    mode: 'development',
    entry: './src/app/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: "js/bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, 'src/app')
    },
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            "HomeContainer": 'src/app/js/components/home/HomeContainer.js',
            "Home": 'src/app/js/components/home/Home.js',

            'StyleSheet': 'src/app/assets/css/style.scss'
        }
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {}
                },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'stage-0']
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build']),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/app/index.html'
        })
    ],
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
};

module.exports = config;