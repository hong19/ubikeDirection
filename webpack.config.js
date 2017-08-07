const path = require('path');

module.exports = {
    // app entry point
    entry: './src/app.js',
    output: {
        //output directory
        path: path.resolve(__dirname, 'dist'),
        //output file name
        filename: 'bundle.js',
        // dev server output path
        publicPath: "/dist/",
    },

    module: {
        loaders: [
            {//.js files, using babel-loader
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
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
};