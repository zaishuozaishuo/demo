var gulp = require('gulp'),
	webpack = require('gulp-webpack'),
	webpackConfig = require('./webpack.config.js');

gulp.task('webpack1',function(){
	console.log(webpackConfig);
	return gulp.src('1.js').pipe(webpack(webpackConfig)).pipe(gulp.dest('build'))
});

gulp.task('default',['webpack1']);