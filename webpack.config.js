let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.jsx',
    output: {
        path: path.resolve('dist'),
        filename: 'app-[hash].js',
        publicPath: process.env.CONTEXT
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx']
    },
    module: {

        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', ['es2015', { loose: true, modules: false }], 'stage-3']
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: require.resolve('style-loader'),
                    },
                    {
                        loader: require.resolve('css-loader'),
                    },
                    {
                        loader: require.resolve('sass-loader'),
                    },

                ]
            }
        ],
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body',
            vendorsFilename: process.env.CONTEXT
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                CONTEXT: JSON.stringify(process.env.CONTEXT)
            }
        })
    ],
    devServer: {
        historyApiFallback: { index: process.env.CONTEXT },
        host: 'localhost',
        port: 8081,
        contentBase: './',
    },
    externals: {
        config: JSON.stringify({
            apiUrl: 'https://s3.amazonaws.com'
        })
    }
}
