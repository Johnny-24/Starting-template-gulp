module.exports = function() {
    $.gulp.task("sass:build", () => {
        return $.gulp
            .src("./dev/src/assets/scss/main.scss")
            .pipe(
                $.gp.sass({
                    "include css": true
                })
            )
            .pipe(
                $.gp.autoprefixer({
                    browsers: ["last 3 version"]
                })
            )
            .pipe($.gp.csscomb())
            .pipe($.gp.csso())
            .pipe($.gulp.dest("./dev/html/assets/css/"));
    });

    $.gulp.task("sass:dev", () => {
        return $.gulp
            .src("./dev/src/assets/scss/main.scss")
            .pipe($.gp.sourcemaps.init())
            .pipe(
                $.gp.sass({
                    "include css": true
                })
            )
            .on(
                "error",
                $.gp.notify.onError(function(error) {
                    return {
                        title: "Sass",
                        message: error.message
                    };
                })
            )
            .pipe($.gp.sourcemaps.write())
            .pipe(
                $.gp.autoprefixer({
                    browsers: ["last 3 version"]
                })
            )
            .pipe($.gulp.dest("./dev/html/assets/css/"))
            .pipe(
                $.browserSync.reload({
                    stream: true
                })
            );
    });
};
