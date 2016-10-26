var webpack = require('webpack');


module.exports = {
    devtool: 'source-map',
    entry: [
        'bootstrap-loader', './app/index.jsx'
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [ "babel" ],
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=900000',
 
            },
            { test: /\.(woff|woff2)$/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf$/,    loader: "file-loader" },
            { test: /\.eot$/,    loader: "file-loader" },
            { test: /\.svg$/,    loader: "file-loader" }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path:'.',
        publicPath: '/',
        filename: 'bundle.js'
    }
};
