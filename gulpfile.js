const gulp = require('gulp');
const util = require('gulp-util');
const jsonMinify = require('gulp-json-minify');

gulp.task('default', () => gulp.src('public/data/*.json')
  .pipe(jsonMinify())
  .pipe(gulp.dest('docs/data'))
  .on('error', util.log));
