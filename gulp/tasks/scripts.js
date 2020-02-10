const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");

module.exports = function() {
    $.gulp.task("webpack:dev", () => {
        return $.gulp
            .src("./src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configDev), webpack)

            .pipe($.gulp.dest("./dist/assets/js/"))
            .on("end", $.browserSync.reload);
    });

    $.gulp.task("webpack:build", () => {
        return $.gulp
            .src("./src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configBuild), webpack)

            .pipe($.gulp.dest("./dist/assets/js/"));
    });
};
