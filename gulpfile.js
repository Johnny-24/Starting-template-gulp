global.$ = {
    path: {
        task: require("./gulp/paths/tasks.js")
    },
    gulp: require("gulp"),
    del: require("del"),
    fs: require("fs"),
    gcmq: require("gulp-group-css-media-queries"),
    sassGlob: require("gulp-sass-glob"),
    browserSync: require("browser-sync").create(),
    ttf2woff: require("gulp-ttf2woff"),
    ttf2woff2: require("gulp-ttf2woff2"),
    favicons: require("gulp-favicons"),
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
            "webpack:dev",
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
            "webpack:build",
            "svg",
            "img:build",
            "fonts",
            "fonts:woff2",
            "fonts:woff",
            "favicon-generate"
        )
    )
);

$.gulp.task("default", $.gulp.series("dev", $.gulp.parallel("watch", "serve")));
