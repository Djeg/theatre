var gulp    = require('gulp');
var karma   = require('karma').server;
var jsdoc   = require('gulp-jsdoc');
var jshint  = require('gulp-jshint');
var concat  = require('gulp-concat');
var uglify  = require('gulp-uglify');
var rename  = require('gulp-rename');
var path    = require('path');

gulp.task('test:jshint', function () {
  return gulp
    .src('lib/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
  ;
});

gulp.task('test', ['test:jshint'], function (done) {
  karma.start({
    configFile: path.join(__dirname, 'karma.conf.js'),
  }, done);
});

gulp.task('doc', function () {
  return gulp
    .src('lib/**/*.js')
    .pipe(jsdoc('./doc', {
      path: 'ink-docstrap',
      theme: 'cosmo'
    }))
  ;
});

gulp.task('build:concat', function () {
  var sources = require('./.sources.json');

  return gulp
    .src(sources)
    .pipe(concat('theatre.js'))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('build', ['build:concat'], function () {
  return gulp
    .src('build/theatre.js')
    .pipe(uglify())
    .pipe(rename('theatre.min.js'))
    .pipe(gulp.dest('build'))
  ;
});

gulp.task('watch', function () {
  gulp.watch('lib/**/*.js', ['test:jshint']);
});

gulp.task('default', ['watch']);
