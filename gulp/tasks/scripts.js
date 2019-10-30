module.exports = function() {
    $.gulp.task("libsJS:dev", () => {
        return $.gulp
            .src([
                "node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/object-fit-images/dist/ofi.min.js",
                "node_modules/es6-promise/dist/es6-promise.min.js"
            ])
            .pipe($.gp.concat("libs.min.js"))
            .pipe($.gulp.dest("./dev/html/assets/js/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });

    $.gulp.task("libsJS:build", () => {
        return $.gulp
            .src([
                "node_modules/svg4everybody/dist/svg4everybody.min.js",
                "node_modules/object-fit-images/dist/ofi.min.js",
                "node_modules/es6-promise/dist/es6-promise.min.js"
            ])
            .pipe($.gp.concat("libs.min.js"))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest("./dev/html/assets/js/"));
    });

    $.gulp.task("js:copy", () => {
        return $.gulp
            .src([
                "./dev/src/assets/js/*.js",
                "!./dev/src/assets/js/libs.min.js"
            ])
            .pipe($.gulp.dest("./dev/html/assets/js/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });
};
