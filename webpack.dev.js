const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            main: path.resolve(__dirname, './src/index.js')
        },
        devServer: {
            open: true,
            compress: true,
            hot: true,
            host: process.env.HOST || '0.0.0.0',
            port: process.env.PORT || 9000
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