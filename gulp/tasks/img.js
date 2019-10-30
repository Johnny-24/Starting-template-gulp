module.exports = function() {
    $.gulp.task("img:dev", () => {
        return $.gulp
            .src("./dev/src/assets/img/*.{png,jpg,gif}")
            .pipe($.gulp.dest("./dev/html/assets/img/"));
    });

    $.gulp.task("img:build", () => {
        return $.gulp
            .src("./dev/src/assets/img/*.{png,jpg,gif}")
            .pipe($.gulp.dest("./dev/html/assets/img/"));
    });

    $.gulp.task("svg:copy", () => {
        return $.gulp
            .src("./dev/src/assets/img/*.svg")
            .pipe($.gulp.dest("./dev/html/assets/img/"));
    });
};
