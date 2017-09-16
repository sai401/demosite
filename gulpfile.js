var gulp=require('gulp');
var jshint=require('gulp-jshint');
var jscs=require('gulp-jscs');
var webserver = require('gulp-webserver');
 
gulp.task('run', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true,
      fallback:'app/index.html',
      port:'37052'
    }))
    .pipe(jshint());
});