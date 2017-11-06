// const gulp = require("gulp");
// const concat = require("gulp-concat");
// const cleanCSS = require("gulp-clean-css");
// const sass = require("gulp-sass");
// const rename = require("gulp-rename");
// // const watch = require("gulp-watch");
// //const browserSync = require("browser-sync").create();
// //const reload = browserSync.reload;


// const src = {
//   css: 'dist/*.css',
//   html: '*.html'
// };


// gulp.task("compileCSS", function() {
//   return gulp.src("src/assets/**/*.css") //usually do "assets/**/*.css" not to look inside node folders
//       // .pipe(sass()) //translating scss into css
//       .pipe(rename("min.style.css")) //renaming file to min, which will be linked to html
//       .pipe(cleanCSS({compatibility: 'ie8'}))
//       .pipe(gulp.dest("src/assets/dist")) //location to put the newly created file

//   });


// gulp.task('styles', function() {
//     return gulp.src(['src/assets/css/*bootstrap*', 'css/*.css'])
//       .pipe(concat('styles.min.css'))
//         .pipe(minifyCSS({
//             keepBreaks: true
//         }))
//         .pipe(gulp.dest('dist/css'));
// });

// gulp.task("watch", function() {
//   gulp.watch(src.css, ["styles"]);
//   //gulp.watch(src.css).on('change', reload);
// });

// gulp.task("browser-sync", function () {
//   browserSync.init({
//     server: "./",
//     files: "**/*",
//     directory: true
//   });
// });

//gulp.task("run", ["compileCSS", "watch", "browser-sync"]);

// gulp.task("run", ["style", "watch"]);

