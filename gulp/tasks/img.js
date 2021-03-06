module.exports = function () {
    $.gulp.task("img:dev", () => {
        return $.gulp
            .src([
                "./src/assets/images/**/*.{png,jpg,gif,svg}",
                "!./src/assets/images/svg/*.*",
                "!./src/assets/images/favicons/*.*",
            ])
            .pipe($.gulp.dest("./dist/assets/images/"));
    });

    $.gulp.task("img:build", () => {
        return $.gulp
            .src("./src/assets/images/*.{png,jpg,gif,svg}")
            .pipe($.gulp.dest("./dist/assets/images/"));
    });
};
