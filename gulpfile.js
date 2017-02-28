var gulp = require('gulp');
//script paths

var uglify = require('gulp-uglify');

var jsDest = 'dist/',
    jsDestDev = 'dev/',
    jsSrc = 'src/*.js';

gulp.task('scripts', function() {
    return gulp.src(jsSrc)
	.pipe(gulp.dest(jsDestDev));
});

var packer = require('gulp-packer');
gulp.task('build', function() {
    return gulp.src(jsSrc)
        .pipe(packer({base62: true, shrink: true}))
        .pipe(gulp.dest(jsDest));

});

gulp.task('default', ['scripts'], function () {
    gulp.watch(jsSrc, ['scripts']);
});
