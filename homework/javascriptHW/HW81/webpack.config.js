const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {

    entry: {
        // balance: './src/balance.js',
        budgetApp: './src/budgetApp.js',
        // expense: './src/expenses2.js',
        // budget: './src/budget.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        // new CopyPlugin({
        //     patterns: [
        //         { from: "./src/images", to: "images" }
        //     ],
        // })
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                // type: 'asset/resource',
                use: {
                    loader: 'url-loader',
                },

            }
        ],
    },
};