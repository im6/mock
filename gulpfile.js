"use restrict";
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rimraf = require('rimraf'),
    watch = require('gulp-watch'),
    gulpJade = require('gulp-jade'),
    jade = require('jade'),
    less = require('gulp-less'),
    flatten = require('gulp-flatten'),
    autoprefixer = require('gulp-autoprefixer'),
    mainBowerFiles = require('main-bower-files'),
    minifyCss = require('gulp-minify-css'),
    util = require('util'),
    filter = require('gulp-filter'),
    cleanCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync'),
    browserSyncSpa = require('browser-sync-spa'),
    sourceMaps = require('gulp-sourcemaps');

/*==============  browser sync  =================*/

gulp.task('rebuildDt', ['dt_jade',"dt_css",'dt_js'], browserSync.reload);
gulp.task('serve', [], function () {
    browserSync({
        server: {
            baseDir:'/build/'
        }
    });
    gulp.watch('src/app/datetree/**/*', ['rebuildDt']);
});


/*==========   for dateTree ===============*/
gulp.task("dt_clean", function (cb) {
    rimraf('public/build/datetree/', cb);
});

gulp.task('dt_assetJs',[], function(cb){
    var f1 = filter(['**/*.js']);
    return gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: 'vendor',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        }
    }))
        .pipe(f1)
        .pipe(concat('lib1.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('public/build/datetree/js'));
});

gulp.task('dt_assetCss',[], function(cb){
    var f1 = filter(['**/*.css']);
    return gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: 'vendor',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        }
    }))
        .pipe(f1)
        .pipe(concat('style1.css'))
        .pipe(gulp.dest('public/build/datetree/css'));
});

gulp.task('dt_assetFont',[], function(cb){
    var f1 = filter([
        '**/*.otf',
        '**/*.eot',
        '**/*.svg',
        '**/*.ttf',
        '**/*.woff',
        '**/*.woff2'
    ]);
    return gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: 'vendor',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        }
    }))
        .pipe(f1)
        .pipe(gulp.dest('public/build/datetree/fonts'));
});

gulp.task('dt_bower',['dt_assetJs','dt_assetCss', 'dt_assetFont']);
// ====  bower end above  =======
gulp.task('dt_css',[], function(){
    console.log("doing the css stuff here");
    return gulp.src(['src/app/datetree/style/*.less','src/app/datetree/asset/**/*.css'])
        .pipe(less())
        //.pipe(autoprefixer())
        .pipe(concat('style2.css'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('public/build/datetree/css'))
});

gulp.task('dt_js',[], function(){
    console.log("dt_js");
    return gulp.src(['src/app/datetree/modules/**/*.js'])
        .pipe(jshint())
        .pipe(concat("app.js"))
        //.pipe(uglify())
        .pipe(gulp.dest('public/build/datetree/js'));
});

gulp.task('dt_jade', function(){
    console.log("dt_jade");
    return gulp.src('src/app/datetree/modules/**/*.jade')
        .pipe(gulpJade({
            jade: jade,
            pretty: true
        }))
        .pipe(flatten())
        .pipe(gulp.dest('public/build/datetree/views'));
});


gulp.task('dt_watch',function(cb){
    gulp.watch('src/app/datetree/**/*', ['dt_jade',"dt_css",'dt_js']);
});

gulp.task('dt',["dt_watch"]);


/*==========   for the home optmization ===============*/
/*==========   sealed and fininshed ===============*/
gulp.task("hm_clean", function (cb) {
    rimraf('public/build/home', cb);
});

gulp.task('hm_css',['hm_clean'], function(){
    return gulp.src(['src/app/homepage/css/*.css'])
        .pipe(concat('style.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('public/build/home/css'))
});

gulp.task('hm_js',["hm_css"], function(){
    return gulp.src(['src/app/homepage/js/**/*.js','src/app/homepage/assets/**/*.js'])
        .pipe(jshint())
        //.pipe(uglify())
        .pipe(gulp.dest('public/build/home/js'));
});

gulp.task('hm_watch',function(){
    gulp.watch(['src/app/homepage/js/**/*.js','src/app/homepage/assets/**/*.js'], ['home']);
});

gulp.task('hm',["hm_js"]);
/*============= for auth ===============*/
gulp.task("au_clean", function (cb) {
    rimraf('public/build/auth', cb);
});
gulp.task('au_css', function(){
    return gulp.src(['src/app/auth/css/*.css','src/app/auth/css/form.less'])
        .pipe(less())
        .pipe(concat('style.min.css'))
        //.pipe(minifyCss())
        .pipe(gulp.dest('public/build/auth/css'))
});
gulp.task('au_font', function(){
    return gulp.src(['src/app/auth/fonts/*'])
        .pipe(gulp.dest('public/build/auth/fonts'))
});
gulp.task('au',["au_css",'au_font']);
gulp.task('watch_au', function(){
   gulp.watch('src/app/auth/*/**',['au']);
});
/*========== for the angular dash page optimziation =========== */


//gulp.task('ds_bower', function() {
//    return gulp.src(mainBowerFiles(), { base: 'vendor' })
//        //.pipe(concat('bundle.js'))
//        .pipe(gulp.dest('public/build/dash/'))
//});
//
//
//gulp.task('ds_jade', function () {
//    return gulp.src('src/app/dash/modules/**/*.jade')
//        .pipe(gulpJade({
//            jade: jade,
//            pretty: true
//        }))
//        .pipe(gulp.dest('public/build/dash/views'))
//});
//
//
//
//gulp.task('ds',["ds_bower"]);


gulp.task('default',[]);