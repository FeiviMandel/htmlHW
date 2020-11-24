const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin(/*{
            filename: 'css/index.css',
        }*/)
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    mode: 'development',
    target: 'web', // bug in webpack dev server - cant have web and es5
    devtool: 'source-map',
    devServer: {
        contentBase: './dist',
      
    },
    module: {
        rules: [
            {

                test: /\.(jpg|png)$/,
                use: [{
                    loader: 'url-loader',
                }]
            },

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
        ]
    }

};