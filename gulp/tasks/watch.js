var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task("watch", function() {

	browserSync.init ({
		server: {
			baseDir: "./"
		}
	});


	watch("./index.html", function() { 	 // it takes  arguments, first is the file and second is what to do?
		browserSync.reload();
	});

	watch("styles/**/*.css", function() {
		gulp.start('cssInject');
	});

});



gulp.task('cssInject', ['styles'], function() {
	return gulp.src('temp/style.css')
	.pipe(browserSync.stream());
});