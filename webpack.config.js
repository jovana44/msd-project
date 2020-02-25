var webpack = require('webpack');
var path = require('path');
var inProduction = (process.env.NODE_ENV === 'production');

module.exports = {
    entry: './webpack/main.js',

    output: {
        path: path.resolve(__dirname, './js'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            'masonry': 'masonry-layout',
            'isotope': 'isotope-layout'
        }
    },

    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },

            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ],
        loaders: [
            // the url-loader uses DataUrls.
            // the file-loader emits files.
            {
                test: /\.woff?v=4.2.0$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            },
            {
                test: require.resolve('wow.js/dist/wow.js'),
                loader: 'exports?this.WOW'
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'Popper': 'popper.js/dist/umd/popper',
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ]
};

if (inProduction) {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin()
    );
}