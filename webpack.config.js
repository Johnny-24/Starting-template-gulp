const UglifyJSPlugin = require("uglifyjs-webpack-plugin");

const configDev = {
    mode: "development",
    entry: {
        main: "./src/assets/js/main.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    }
};

const configBuild = {
    mode: "production",
    entry: {
        vendors: "./src/assets/js/vendors.js",
        main: "./src/assets/js/main.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ]
};

module.exports = { configDev, configBuild };
