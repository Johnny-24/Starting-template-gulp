module.exports = function() {
    $.gulp.task("img:dev", () => {
        return $.gulp
            .src("./dev/src/assets/images/*.{png,jpg,gif,svg}")
            .pipe($.gulp.dest("./dev/dist/assets/images/"));
    });

    $.gulp.task("img:build", () => {
        return $.gulp
            .src("./dev/src/assets/images/*.{png,jpg,gif,svg}")
            .pipe($.gulp.dest("./dev/dist/assets/images/"));
    });
};
