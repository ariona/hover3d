/**
 *
 * jQuery hover3d
 *
 * @since 1.0.0
 * @authors @ariona_rian
 * @url http://ariona.github.io/hover3d
 *
 */

// Project initialization
var project  	 = "hover3d",
	build        = "./dist/",
	buildInclude = [
		// Common file types
		'**/*.html',
		'**/*.css',
		'**/*.js',
		'**/*.svg',
		'**/*.ttf',
		'**/*.otf',
		'**/*.eot',
		'**/*.woff',
		'**/*.woff2',
		'**/*.jpg',
		'**/*.png',
		'**/*.po',
		'**/*.mo',

		// Exluded files and folders
		'!**/*.gitignore',
		'!.editorconfig',
		'!.csscomb.json',
		'!.README.md',
		'!node_modules/**/*',
		'!source/**/*',
		'!source/sass/.sass-cache/**/*',
		'!gulpfile.js',
		'!package.json',
		'!dist/**/*'
	]

// Init all Plugins
var gulp     	 = require( "gulp" ),
	
	// CSS Related Plugins
	sass         = require( "gulp-sass" ),
	autoprefixer = require( "gulp-autoprefixer" ),

	// Javascript Related Plugins
	jshint       = require( "gulp-jshint" ),
	uglifyjs     = require( "gulp-uglify" ),
	
	// Tools & Helpers
	browserSync  = require( "browser-sync" ).create(),
	rename       = require( "gulp-rename" );


/**
 * CSS
 * ===============================
 * Compiling Sass files, autoprefix it, prettify with CSSComb
 * and create minified file
 **/
gulp.task( 'css', function(){

	return gulp.src( 'source/sass/*.scss' )
			   .pipe( sass().on('error',sass.logError))
			   .on('error', function(){ this.emit( 'end' ) })
			   .pipe( autoprefixer({browsers: "last 4 version"}) )
			   .pipe( gulp.dest(".") )
			   .pipe( browserSync.stream() );

});

/**
 * JS Custom
 * =====================================
 * Running JSHint for all custom script
 * Create minified version of script
 **/

gulp.task( 'js', function(){

	return gulp.src( "source/js/*.js" )
			   .pipe( jshint({
			   		'undef': true,
			   		'unused': true,
			   		'browser': true,
			   		'devel': true,
			   		'predef': ["jQuery", "$"]
			   }))
			   .pipe( gulp.dest( 'dist/js/' ) )
			   .pipe( rename({ suffix: '.min' }) )
			   .pipe( uglifyjs() )
			   .pipe( gulp.dest("dist/js/") )

});

/**
 * Watch
 * ===============================
 * Default task for watching and start developing
 * This will work for wordpress theme development
 * with support of browsersync
 **/
gulp.task( 'default', function(){
	files = ["./**/*.html","./**/*.js"];
	browserSync.init(files,{
		server:{
			baseDir: ".",
		}
	});
	gulp.watch( "./source/sass/**/*.scss", ["css"] );
	gulp.watch( "./source/js/**/*.js", ["js"], browserSync.reload )

});