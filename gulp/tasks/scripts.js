const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");

module.exports = function() {
    // $.gulp.task("js:copy", () => {
    //     return $.gulp
    //         .src(["./dev/src/assets/js/jquery.js"])
    //         .pipe($.gulp.dest("./dev/dist/assets/js/"))

    //         .pipe(
    //             $.browserSync.reload({
    //                 stream: true
    //             })
    //         );
    // });
    $.gulp.task("webpack:dev", () => {
        return $.gulp
            .src("./dev/src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configDev), webpack)

            .pipe($.gulp.dest("./dev/dist/assets/js/"))
            .on("end", $.browserSync.reload);
    });
    $.gulp.task("webpack:build", () => {
        return $.gulp
            .src("./dev/src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configBuild), webpack)

            .pipe($.gulp.dest("./dev/dist/assets/js/"));
    });
};
