const config = {
    mode: "development",
    entry: {
        vendors: "./dev/src/assets/js/vendors.js",
        main: "./dev/src/assets/js/main.js"
    },
    output: {
        filename: "[name].js"
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
    }
};

module.exports = config;
