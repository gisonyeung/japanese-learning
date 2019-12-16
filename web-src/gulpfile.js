const gulp = require('gulp')
const runSequence = require('gulp4-run-sequence')

gulp.task('build', function (done) {
  runSequence(
    ['move:assets', 'move:html']
  )
  done()
})

// move assets
gulp.task('move:assets', function () {
  return gulp
    .src('./assets/**')
    .pipe(gulp.dest('../www/assets/'))
})

// move html
gulp.task('move:html', function () {
  return gulp
    .src('./index.html')
    .pipe(gulp.dest('../www/views/'))
})










