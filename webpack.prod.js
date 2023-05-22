const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
    return {
        mode: 'production',
        entry: {
            main: path.resolve(__dirname, './src/js/index.js')
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: ['babel-loader']
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'src/views/index.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'catalog.html',
                template: 'src/views/catalog.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/assets'),
                        to: path.resolve(__dirname, 'dist/assets')
                    }
                ]
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    port: process.env.PORT === '3000'
                }
            })
        ]
    }
}