const path = require('path');
const webpack = require('webpack');

module.exports = {
    // app entry point
    entry: './src/app.js',
    output: {
        //output directory
        path: path.resolve(__dirname, '../dist'),
        //output file name
        filename: 'bundle.js',
        // dev server output path
        publicPath: "/dist/",
    },

    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {//.js files, using babel-loader
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.woff|\.woff2|\.svg|.eot|\.ttf/,
                loader: 'url-loader?prefix=font/&limit=10000',
                options: {
                    prefix: 'font',
                    limit: 10000,
                }
            },
        ]
    },

    //Import Path Resolver, the root directory
    resolve: {
        modules: [
            path.resolve('./src'),
            path.resolve('./node_modules')
        ],
        //Automatically resolve certain extensions
        extensions: ['*', '.js', '.jsx', '.json'],
    },

    devServer: {
        // enable inline mode
        inline: true
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
        })
    ],
};