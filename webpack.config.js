var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://10.10.105.0:8080');
        sources.push('webpack/hot/only-dev-server');
    }

    return sources;
}

module.exports = {
    entry: {
        helloWorld: getEntrySources([
            './src/index.js'
        ])
    },
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'jsx', 'babel'], // <-- changed line
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
                //loader: ExtractTextPlugin.extract('css!sass') // <--- Exports it to style.css instead of inline
            },
            {
                test: /\.(ttf|eot|svg|woff(2))(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            },
            {
                test: /\.json$/, loaders: ['json']
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"development"'
        }),
        new ExtractTextPlugin('style/style.css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};
