 var gulp = require('gulp'),
     uglify = require('gulp-uglify'),
     sass = require('gulp-ruby-sass'),
     plumber = require('gulp-plumber');
 
// Scripts Task 
//Uglifies, 
gulp.task('scripts', function() {
    gulp.src('*.js')
        .pipe(plumber())
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));  
});


//Styles Task 
gulp.task('styles', function() {   
    return sass('scss/*.scss', {
     style: 'compressed'
    })    
     .pipe(plumber())    
     .pipe(gulp.dest('css'));
   });

//Watch task
//Watch JS
gulp.task('watch', function() {
    gulp.watch('*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
}); 
    
 gulp.task('default', ['scripts', 'watch']);  