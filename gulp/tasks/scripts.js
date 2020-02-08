const webpackStream = require("webpack-stream");
const webpack = require("webpack");
const webpackConfig = require("../../webpack.config");

module.exports = function() {
    // $.gulp.task("libsJS:dev", () => {
    //     return $.gulp
    //         .src([
    //             "node_modules/svg4everybody/dist/svg4everybody.min.js",
    //             "node_modules/object-fit-images/dist/ofi.min.js"
    //         ])

    //         .pipe($.gp.concat("libs.min.js"))

    //         .pipe($.gulp.dest("./dev/dist/assets/js/"))

    //         .pipe(
    //             $.browserSync.reload({
    //                 stream: true
    //             })
    //         );
    // });

    // $.gulp.task("libsJS:build", () => {
    //     return $.gulp
    //         .src([
    //             "node_modules/svg4everybody/dist/svg4everybody.min.js",
    //             "node_modules/object-fit-images/dist/ofi.min.js"
    //         ])
    //         .pipe($.gp.concat("libs.min.js"))

    //         .pipe($.gp.uglifyjs())
    //         .pipe($.gulp.dest("./dev/dist/assets/js/"));
    // });

    $.gulp.task("js:copy", () => {
        return $.gulp
            .src(["./dev/src/assets/js/jquery.js"])
            .pipe(
                $.babel({
                    presets: ["@babel/env"]
                })
            )
            .pipe($.gulp.dest("./dev/dist/assets/js/"))

            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });
    $.gulp.task("webpack:dev", () => {
        return $.gulp
            .src("./dev/src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configDev), webpack)

            .pipe($.gulp.dest("./dev/dist/assets/js/"));
    });
    $.gulp.task("webpack:build", () => {
        return $.gulp
            .src("./dev/src/assets/js/main.js")
            .pipe(webpackStream(webpackConfig.configBuild), webpack)

            .pipe($.gulp.dest("./dev/dist/assets/js/"));
    });
};
