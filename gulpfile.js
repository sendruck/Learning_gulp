 var gulp = require('gulp'),
     uglify = require('gulp-uglify'),
     sass = require('gulp-ruby-sass'),
     plumber = require('gulp-plumber'),
     livereload = require('gulp-livereload'),
     imagemin = require('gulp-imagemin'),
     prefix = require('gulp-autoprefixer');
 
// Scripts Task 
//Uglifies, 
gulp.task('scripts', function() {
    gulp.src('*.js')
        .pipe(uglify())
        .on('error', errorLog)
        .pipe(gulp.dest('build/js'));  
});

function errorLog(error) {
    console.error.bind(error);
    this.emit('end');
}


//Styles Task 
gulp.task('styles', function() {   
    return sass('scss/*.scss', {
     style: 'expended'
    })    
     .on('error', errorLog)
     .pipe(prefix('last 2 versions'))
     .pipe(gulp.dest('css'))
     .pipe(livereload());
   });

//Image Task
//Compress images
gulp.task('image', function(){
   gulp.src('img/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'));    
});

//Watch task
//Watch JS
gulp.task('watch', function() {

    var server = livereload();
    

    gulp.watch('*.js', ['scripts']);
    gulp.watch('scss/*.scss', ['styles']);
}); 
    
 gulp.task('default', ['scripts', 'watch', 'image']);  