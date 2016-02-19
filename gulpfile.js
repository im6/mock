var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    minifyCss = require('gulp-minify-css'),
    sourceMaps = require('gulp-sourcemaps');

var path = {
    buildStyle:   'public/build/homepage/css'
};
/*==========   for the homepage optmization ===============*/
gulp.task("clean_js", function (cb) {
    rimraf('public/build/', cb);
});

gulp.task("clean_css", function (cb) {
    rimraf(path.buildStyle, cb);
});


gulp.task('homeStyle', function(){
    return gulp.src(['public/app/homepage/css/*.css', '!public/app/homepage/css/style_all.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/build/homepage/css'))
});

gulp.task('loginStyle',["clean_css"], function(){
    return gulp.src(['public/app/homepage/css/*.css', '!public/app/homepage/css/style_all.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(path.buildStyle))
});


gulp.task('appScript',["clean_js"], function(){
    return gulp.src(['public/app/**/*.js'])
        .pipe(sourceMaps.init())
        .pipe(jshint())
        .pipe(uglify())
        .pipe(sourceMaps.write({addComment: false}))
        .pipe(gulp.dest('public/build/'));
});

/*========== for the angular dash page optimziation =========== */

//var dashCssList = [
//    'public/assets/metronic/global/plugins/font-awesome/css/font-awesome.min.css',
//    'public/assets/metronic/global/plugins/simple-line-icons/simple-line-icons.min.css',
//    'public/assets/metronic/global/plugins/bootstrap/css/bootstrap.min.css',
//    'public/assets/metronic/global/plugins/uniform/css/uniform.default.css',
//    'public/assets/metronic/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css',
//    'public/assets/metronic/global/css/components-rounded.css',
//    'public/assets/metronic/global/css/plugins.min.css',
//    'public/assets/metronic/layouts/layout4/css/layout.min.css',
//    'public/assets/metronic/layouts/layout4/css/themes/light.min.css',
//    'public/assets/metronic/layouts/layout4/css/custom.min.css',
//    'public/assets/animate/animate.min.css'
//];
//
//gulp.task('dashStyle', function(){
//    return gulp.src(dashCssList)
//        .pipe(concat('style.css'))
//        .pipe(minifyCss())
//        .pipe(gulp.dest('public/build/dash/css'));
//});

gulp.task('default',[
    'homeStyle',
    'appScript'
]);