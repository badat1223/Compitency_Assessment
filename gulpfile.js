const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
  return src('assets/sass/**/*.scss')//sourcfile
    .pipe(sass())//compiler
    .pipe(purgecss({ content: ['*.html'] }))
    .pipe(dest('assets/css'))//output to css in root Dir
}

function watchTask() {
  watch(['assets/sass/**/*.scss', '*.html'], buildStyles)///Watches Source Sass File
}

exports.default = series(buildStyles, watchTask)//Export Files