module.exports = function() {
    $.gulp.task("fonts", () => {
        return $.gulp
            .src("./dev/src/assets/fonts/**/*.{woff,woff2}")
            .pipe($.gulp.dest("./dev/html/assets/fonts/"));
    });

    $.gulp.task("fonts:woff2", () => {
        return $.gulp
            .src("./dev/src/assets/fonts/**/*.ttf")
            .pipe($.gp.ttf2woff2())
            .pipe($.gulp.dest("./dev/html/assets/fonts/"));
    });

    $.gulp.task("fonts:woff", () => {
        return $.gulp
            .src("./dev/src/assets/fonts/**/*.ttf")
            .pipe($.gp.ttf2woff())
            .pipe($.gulp.dest("./dev/html/assets/fonts/"));
    });
};
