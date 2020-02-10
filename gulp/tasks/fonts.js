module.exports = function() {
    $.gulp.task("fonts", () => {
        return $.gulp
            .src("./src/assets/fonts/**/*.{woff,woff2}")
            .pipe($.gulp.dest("./dist/assets/fonts/"));
    });

    $.gulp.task("fonts:woff2", () => {
        return $.gulp
            .src("./src/assets/fonts/**/*.ttf")
            .pipe($.gp.ttf2woff2())
            .pipe($.gulp.dest("./dist/assets/fonts/"));
    });

    $.gulp.task("fonts:woff", () => {
        return $.gulp
            .src("./src/assets/fonts/**/*.ttf")
            .pipe($.gp.ttf2woff())
            .pipe($.gulp.dest("./dist/assets/fonts/"));
    });
};
