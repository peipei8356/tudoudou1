// 获取 gulp
var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
gulp.task('css', function () {
    gulp.src('css/allcss.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css'))
});
var less = require('gulp-less');
gulp.task('less', function () {
    gulp.src('css/less/allcss.less')
        .pipe(less())
        .pipe(gulp.dest('./css'))
});
var browserSync = require('browser-sync');
gulp.task('browser-sync', function () {
    var files = [
        '*.html',
        'css/*.css',
        'imgs/*.png',
        'js/*.js'
    ];
    browserSync.init(files, {
        server : {
            baseDir : './'
        }
    });
});
gulp.task('auto', function () {
    gulp.watch('css/less/**.less', ['less'])
});
gulp.task('default', ['browser-sync', 'auto']);