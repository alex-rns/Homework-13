var gulp           	   = require('gulp'),
		sass           = require('gulp-sass'),
    	htmlmin        = require('gulp-htmlmin'),
    	cssnano 	   = require('gulp-cssnano'),
		browserSync    = require('browser-sync'),
		concat         = require('gulp-concat'),
		uglify         = require('gulp-uglify'),
		rename         = require('gulp-rename'),
		del            = require('del'),
		imagemin       = require('gulp-imagemin'),
		cache          = require('gulp-cache'),
		autoprefixer   = require('gulp-autoprefixer'),
		notify         = require("gulp-notify");


gulp.task('common-js', function() {
	return gulp.src(['src/js/common.js'])
	.pipe(concat('common.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('src/js'));
});

gulp.task('js', ['common-js'], function() {
	return gulp.src([
		'./node_modules/jquery/dist/jquery.min.js',
        './node_modules/popper.js/dist/umd/popper.min.js',
        // './node_modules/tether/dist/js/tether.min.js',
		'./node_modules/bootstrap/dist/js/bootstrap.min.js',

		'./node_modules/slick-carousel/slick/slick.min.js',
		'./node_modules/masonry-layout/dist/masonry.pkgd.min.js',

		'src/js/common.min.js' // Всегда в конце
		])
	.pipe(concat('scripts.min.js'))
	// .pipe(uglify()) // Минимизировать весь js
	.pipe(gulp.dest('src/js'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'src'
		},
		notify: false
	});
});

gulp.task('sass', function() {
	return gulp.src('src/styles/sass/**/*.sass')
	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
	.pipe(rename({suffix: '.min', prefix : ''}))
	.pipe(autoprefixer(['last 15 versions']))
	.pipe(gulp.dest('src/styles/css'))
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('watch', ['sass', 'js', 'browser-sync'], function() {
	gulp.watch('src/styles/sass/**/*.sass', ['sass']);
	gulp.watch('src/js/common.js', ['js']);
	gulp.watch('src/*.html', browserSync.reload);
});

gulp.task('imagemin', function() {
	return gulp.src('src/images/**/*')
	.pipe(cache(imagemin()))
	.pipe(gulp.dest('dist/images'));
});

gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

	gulp.src(['src/*.html'])
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest('dist'));

	gulp.src(['src/styles/css/style.min.css'])
        .pipe(cssnano())
		.pipe(gulp.dest('dist/styles/css'));

	gulp.src(['src/js/scripts.min.js'])
		.pipe(gulp.dest('dist/js'));

	gulp.src(['src/fonts/**/*'])
		.pipe(gulp.dest('dist/fonts'));
});

gulp.task('removedist', function() { return del.sync('dist'); });
gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
