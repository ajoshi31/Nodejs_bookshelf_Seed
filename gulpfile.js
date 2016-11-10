var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

gulp.task('default', function () {
    livereload.listen();
    nodemon({
        script: './bin/www',
        ext: 'js'
    }).on('restart', function () {
        gulp.src('./bin/www')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
})
