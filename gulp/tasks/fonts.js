module.exports = function() {
    $.gulp.task("fonts", () => {
        return $.gulp
            .src("./dev/src/assets/fonts/**/*.*")
            .pipe($.gulp.dest("./dev/html/assets/fonts/"));
    });
};
