const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify');
const pump = require('pump');
const cleanCSS = require('gulp-clean-css');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const reload = browserSync.reload;
const rename = require('gulp-rename');
const babel = require('gulp-babel');
const gulpSequence = require('gulp-sequence');

sass.compiler = require('node-sass');

const config = {
    server: {
        baseDir: "./dist"
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: ""
};

gulp.task('clean', function () {
    return gulp.src('./dist', {read: false})
        .pipe(clean());
});

gulp.task('copy-html', function () {
    return gulp.src('index.html')
        .pipe(gulp.dest('dist/'));
});

gulp.task('copy-fonts', function () {
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'))
});

gulp.task('sass', function () {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('prefixer', ['sass'], () =>
    gulp.src('src/css/style.css')
        .pipe(autoprefixer({
            browsers: ['last 15 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('src/css'))
);

gulp.task('mini-css', ['prefixer'], () => {
    return gulp.src('./src/css/style.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename("/style.min.css"))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('concat-js', function () {
    return gulp.src(['./src/js/*.js', '!./src/js/main.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/jsMain'));
});

gulp.task('transpile', ['concat-js'], function () {
    return gulp.src('./src/jsMain/main.js')
        .pipe(babel({presets: ["@babel/env"]}))
        .pipe(gulp.dest('./src/jsMain'));
});

gulp.task('compress-js', ['transpile'], function (cb) {
    pump([
            gulp.src('./src/jsMain/main.js'),
            uglify(),
            rename("/main.min.js"),
            gulp.dest('dist/js')
        ],
        cb
    );
});

gulp.task('img-minify', () =>
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'))
);

gulp.task('serve', function () {
    browserSync.init(config);
    gulp.watch('./index.html', ['copy-html']).on('change', reload);
    gulp.watch('./src/scss/*.scss', ['mini-css']).on('change', reload);
    gulp.watch('./src/js/*.js', ['compress-js']).on('change', reload);
    gulp.watch('./src/images/*.*', ['img-minify']).on('change', reload);
});

gulp.task('dev', gulpSequence(['copy-html', 'copy-fonts', 'compress-js', 'mini-css', 'img-minify'], 'serve'));

gulp.task('build', gulpSequence('clean', ['copy-html', 'mini-css', 'copy-fonts', 'compress-js', 'img-minify']));