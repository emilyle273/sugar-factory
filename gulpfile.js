var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
gulp.task('sass', function() {
  return gulp.src('styles/main.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(livereload())
    .pipe(browserSync.stream());
})

gulp.task('html', function() {
  return gulp.src('/*.html')
      .pipe(livereload(server))
});

gulp.task('watch', function(){
  gulp.watch('styles/**/*.scss', gulp.series(['sass'])); 
  gulp.watch('/*.html', gulp.series(['html']));
  // Other watchers
})