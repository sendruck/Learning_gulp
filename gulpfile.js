 var gulp = require('gulp');
     uglify = require('gulp-uglify');
 

 gulp.task('default', function(){
    gulp.src('LearnGulp/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('minjs'));  
}); 