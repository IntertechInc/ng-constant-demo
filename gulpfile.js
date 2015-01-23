'use strict';

var gulp = require('gulp'),
  ngConstant = require('gulp-ng-constant');

gulp.task('config', function () {
  gulp.src('./config.json')
    .pipe(ngConstant())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['config']);