const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('assets/sass/**/*.scss')//sourcfile
    .pipe(sass())//compiler
    .pipe(dest('assets/css'))//output to css in root Dir
}

function watchTask() {
  watch(['assets/sass/**/*.scss'], buildStyles)///Watches Source Sass File
}

exports.default = series(buildStyles, watchTask)//Export Files