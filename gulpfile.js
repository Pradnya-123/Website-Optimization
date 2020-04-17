var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concatify = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	imagemin = require('gulp-imagemin'),
	minifyhtml = require('gulp-minify-html'),
	minifyCSS = require('gulp-minify-css')
	gulprename = require('gulp-rename');
	
// Paths to various files
var paths = {
	scripts: ['sourceCode/js/*.js', 'bower_components/jquery/dist/jquery.js'],
	styles: ['sourceCode/css/*.css'],
	images: ['sourceCode/images/*'],
	content: ['sourceCode/*.html']
}

// Compiles scss files and outputs them to build/css/*.css
gulp.task('styles', function() {
	return gulp.src(paths.styles)
				
				.pipe(minifyCSS())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('./productionCode/css/'))
});

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('perfmatters.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./productionCode/js/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('content', function() {
	return gulp.src(paths.content)
		.pipe(minifyhtml({
			empty: true,
			quotes: true
		}))
		.pipe(gulp.dest('./productionCode/'))
});

// Optimizes our image files and outputs them to build/image/*
gulp.task('images', function() {
	return gulp.src(paths.images)
				.pipe(imagemin({
					optimizationLevel: 5
				}))
				.pipe(gulp.dest('productionCode/images'))
})

// Paths to various files
var vpaths = {
	scripts: ['sourceCode/views/js/*.js', 'bower_components/jquery/dist/jquery.js'],
	styles: ['sourceCode/views/css/*.css'],
	images: ['sourceCode/views/images/*'],
	content: ['sourceCode/views/pizza.html']
}

// Compiles scss files and outputs them to build/css/*.css
gulp.task('vstyles', function() {
	return gulp.src(vpaths.styles)
				
				.pipe(minifyCSS())
				.pipe(sourcemaps.write())
				.pipe(gulp.dest('productionCode/views/css/'))
});

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('vscripts', function() {
	return gulp.src(vpaths.scripts)
		.pipe(sourcemaps.init())
			.pipe(uglify())
			.pipe(concatify('main.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('productionCode/views/js/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('vcontent', function() {
	return gulp.src(vpaths.content)
		.pipe(minifyhtml({
			empty: true,
			quotes: true
		}))
		.pipe(gulp.dest('productionCode/views/'))
});

// Optimizes our image files and outputs them to build/image/*
gulp.task('vimages', function() {
	return gulp.src(vpaths.images)
				.pipe(imagemin({
					optimizationLevel: 5
				}))
				.pipe(gulp.dest('productionCode/views/images'))
})

// Watches for changes to our files and executes required scripts
gulp.task('watch', function() {
	gulp.watch(paths.scripts, ['scripts']);
	gulp.watch(paths.content, ['content']); 
	gulp.watch(paths.styles, ['styles']);
	gulp.watch(paths.images, ['images']);
	gulp.watch(vpaths.scripts, ['vscripts']);
	gulp.watch(vpaths.content, ['vcontent']);	
	gulp.watch(vpaths.styles, ['vstyles']);
	gulp.watch(vpaths.images, ['vimages']); 
});

gulp.task('default', ['images', 'content', 'scripts', 'styles', 'vimages', 'vcontent', 'vscripts', 'vstyles']);
gulp.task('watch');