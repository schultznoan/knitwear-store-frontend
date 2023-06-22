const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
    return {
        mode: 'production',
        entry: {
            main: path.resolve(__dirname, './src/index.js')
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
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
                filename: 'about.html',
                template: 'src/views/about.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'checkout.html',
                template: 'src/views/checkout.html'
            }),
            new HtmlWebpackPlugin({
                filename: 'checkout-submit.html',
                template: 'src/views/checkout-submit.html'
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, 'src/assets'),
                        to: path.resolve(__dirname, 'dist/assets')
                    }
                ]
            })
        ]
    }
}