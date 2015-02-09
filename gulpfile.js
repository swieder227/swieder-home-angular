var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    connect = require('gulp-connect'),
    sourcemaps = require('gulp-sourcemaps');

// Task to compile sass, autoprefix, create min and reload live
gulp.task('styles', function() {
  return gulp.src('scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(connect.reload())
    .pipe(notify({ message: 'Styles task complete' }));
});

// Task passes app.css into livereload
gulp.task('live', function () {
  gulp.src('./css/app.css')
    .pipe(connect.reload());
});

// Watch function continually checks for saved changes
gulp.task('watch', function () {
  gulp.watch('./css/app.css', ['live']);
  gulp.watch('./scss/*.scss', ['styles'])
});

// locationHost:8888
gulp.task('webserver', function() {
  connect.server({
    port: 8888,
    livereload: true
  });
});

// Default task, run in cli with 'grunt'
gulp.task('default', ['styles', 'webserver', 'watch']);
