 var gulp = require('gulp');
     uglify = require('gulp-uglify');
 
// Scripts Task 
//Uglifies, 
gulp.task('scripts', function() {
    gulp.src('*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));  
});


//Watch task
//Watch JS
gulp.task('watch', function() {
    gulp.watch('*.js', ['scripts']);
}); 
    
 gulp.task('default', ['scripts', 'watch']); 