global.$ = {
    path: {
        task: require("./gulp/paths/tasks.js")
    },
    gulp: require("gulp"),
    babel: require("gulp-babel"),
    del: require("del"),
    fs: require("fs"),
    gcmq: require("gulp-group-css-media-queries"),
    sassGlob: require("gulp-sass-glob"),
    browserSync: require("browser-sync").create(),
    ttf2woff: require("gulp-ttf2woff"),
    ttf2woff2: require("gulp-ttf2woff2"),
    gp: require("gulp-load-plugins")()
};

$.path.task.forEach(function(taskPath) {
    require(taskPath)();
});

$.gulp.task(
    "dev",
    $.gulp.series(
        "clean",
        $.gulp.parallel(
            "sass:dev",
            "pug",
            "libsJS:dev",
            "js:copy",
            "svg",
            "img:dev",
            "fonts",
            "fonts:woff2",
            "fonts:woff"
        )
    )
);

$.gulp.task(
    "build",
    $.gulp.series(
        "clean",
        $.gulp.parallel(
            "sass:build",
            "pug",
            "libsJS:build",
            "js:copy",
            "svg",
            "img:build",
            "fonts",
            "fonts:woff2",
            "fonts:woff"
        )
    )
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
