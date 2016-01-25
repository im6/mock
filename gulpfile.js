var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css');


/*
*   for the homepage optmization
* */

gulp.task('homeScript_build', function(){
   return gulp.src('public/app/homepage/js/*.js')
       .pipe(jshint())
       .pipe(uglify())
       .pipe(gulp.dest('public/build/homepage/js'))
});

gulp.task('homeStyle_build', function(){
    return gulp.src(['public/app/homepage/css/*.css', '!public/app/homepage/css/style_all.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/build/homepage/css'))
});

/*
*   for the angular dash page optimziation
* */

gulp.task('default',[
    'homeScript_build',
    'homeStyle_build'
]);