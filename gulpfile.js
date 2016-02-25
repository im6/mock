var gulp = require('gulp');

var jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    mainBowerFiles = require('main-bower-files'),
    minifyCss = require('gulp-minify-css'),
    sourceMaps = require('gulp-sourcemaps');

/*==========   for the homepage optmization ===============*/
gulp.task("hm_clean", function (cb) {
    rimraf('public/build/home', cb);
});

gulp.task('hm_css',['hm_clean'], function(){
    return gulp.src(['public/app/homepage/css/*.css', '!public/app/homepage/css/style_all.css'])
        .pipe(concat('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/build/home/css'))
});

gulp.task('hm_js',["hm_css"], function(){
    console.log(3);
    return gulp.src(['public/app/homepage/js/**/*.js','public/assets/home/**/*.js'])
        .pipe(jshint())
        //.pipe(uglify())
        .pipe(gulp.dest('public/build/home/js'));
});

gulp.task('home',["hm_js"]);
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
gulp.task('loginStyle',["clean_css"], function(){
    return gulp.src(['public/app/homepage/css/*.css', '!public/app/homepage/css/style_all.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/build/homepage/css'))
});

gulp.task('bowerFile', function() {
    return gulp.src(mainBowerFiles(/* options */), { base: 'path/to/bower_components' })
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/asset'))
});

gulp.task('default',[]);