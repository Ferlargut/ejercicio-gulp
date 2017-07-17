var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var concat = require("gulp-concat");
var browserSync = require('browser-sync').create();

var config = {
	source: "./src/",
	dist: "./public",
};
var paths = {
	html: "index.html",
	sass: "assets/scss/**/*.scss",
	mainSass:"assets/scss/main.scss"
};
var sources = {
	html: config.source + paths.html,
	sass: config.source + paths.sass,
	rootSass: config.source + paths.mainSass,
};
gulp.task('html', ()=>{
    gulp.src(sources.html).pipe(gulp.dest(config.dist));
})

