const path = require('path');

module.exports = {
    // app entry point
    entry: './app.js',
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
                test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/
            },
            {//.jsx files, using babel-loader
                test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/
            },
        ]
    },

    devServer: {
        // enable inline mode
        inline: true
    },
};