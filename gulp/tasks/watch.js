module.exports = function() {
    $.gulp.task("watch", function() {
        $.gulp.watch("./dev/src/pug/**/*.pug", $.gulp.series("pug"));
        $.gulp.watch(
            "./dev/src/assets/scss/**/*.scss",
            $.gulp.series("sass:dev")
        );
        $.gulp.watch("./dev/src/assets/images/svg/*.svg", $.gulp.series("svg"));
        $.gulp.watch(
            "./dev/src/assets/js/**/*.js",
            $.gulp.series("libsJS:dev", "js:copy")
        );
        $.gulp.watch(
            "./dev/src/assets/images/*.{png,jpg,gif,svg}",
            $.gulp.series("img:dev")
        );
        $.gulp.watch(
            "./dev/src/assets/fonts/**/*.*",
            $.gulp.series("fonts", "fonts:woff2", "fonts:woff")
        );
    });
};
