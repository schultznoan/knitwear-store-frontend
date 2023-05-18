const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = () => {
    return {
        mode: 'development',
        entry: {
            main: path.resolve(__dirname, './src/js/index.js')
        },
        devServer: {
            open: true,
            compress: true,
            hot: true,
            port: 9000
        },
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[id].js'
        },
        module: {
            rules: [{
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: ['babel-loader']
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
            })
        ]
    }
}