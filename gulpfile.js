'use strict';

var browserify = require('browserify')
  , gulp = require('gulp')
  , image = require('gulp-image')
  , inject = require('gulp-inject')
  , jshint = require('gulp-jshint')
  , less = require('gulp-less')
  , mocha = require('gulp-mocha')
  , nodemon = require('nodemon')
  , rimraf = require('rimraf')
  , source = require('vinyl-source-stream')
  , sourcemaps = require('gulp-sourcemaps')
  , util = require('gulp-util')
  ;

var nodemonInstance;

gulp.task('lint', function () {
  return gulp
    .src(['client/**/*.js', 'server/**/*.js', 'tests/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('test', function () {
  return gulp.src('tests/**/*.js', {read: false})
    .pipe(mocha({reporter: 'dot'}));
});

gulp.task('browserify', function() {
  return browserify('./client/main.js')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('build/'));
});

gulp.task('less', function () {
  return gulp
    .src('./**/*.less', { cwd: 'client/less/' })
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'));
});

gulp.task('image', function () {
  return gulp
    .src('client/images/*')
    .pipe(image())
    .pipe(gulp.dest('build/images/'));
});

gulp.task('js', ['lint'], function () {
  return gulp
    .src('client/js/*.js')
    .pipe(gulp.dest('build/js/'));
});

gulp.task('html', ['browserify', 'less', 'js'], function () {
  var sources = gulp.src(['./**/*.js', './**/*.css'], { cwd: 'build/' });

  return gulp
    .src('client/**/*.html')
    .pipe(inject(sources))
    .pipe(gulp.dest('build/'))
    ;
});

gulp.task('build', ['lint', 'browserify', 'less', 'image', 'js', 'html', 'test']);

gulp.task('serve', ['lint'], function (cb) {
  if (!nodemonInstance) {
    nodemonInstance = nodemon({
      script: './server/main.js',
      ignore: ['*'] // disable default watch
    }).on('log', function (log) {
      util.log(log.colour);
    }).once('start', cb);
  } else {
    nodemonInstance
      .once('start', cb)
      .emit('restart');
  }
});

gulp.task('watch', ['build', 'serve'], function(cb) {
  gulp.watch('client/**/*.js', ['lint', 'browserify', 'js', 'html']);
  gulp.watch('server/**/*.js', ['lint', 'test', 'serve']);

  gulp.watch('client/less/*.less', ['less']);

  gulp.watch('client/images/*', ['image']);

  gulp.watch('client/**/*.html', ['html']);

  return cb();
});

gulp.task('clean', function (cb) {
  rimraf('build/', cb);
});
