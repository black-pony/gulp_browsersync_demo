var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var htmlmin = require('gulp-htmlmin');

gulp.task('htmlmin',function(){
    gulp.src("./src/index.html")
        .pipe(htmlmin({collapseWhitespace:true}))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.reload({stream:true}));
});

gulp.task('watch',function(){
    browserSync.init({
        server:{
            baseDir:"./dist"
        }
    });
    gulp.watch(['./src/index.html'],['htmlmin']);
});