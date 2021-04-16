const {
    src,
    dest,
    task,
    series,
    watch,
    parallel
} = require('gulp');
const {
    SRC_PATH,
    DIST_PATH,
    STYLE_LIBS,
    JS_LIBS
} = require('./gulp.config');

const env = process.env.NODE_ENV;

const gulp = require('gulp');
const rm = require('gulp-rm');
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const webp = require('gulp-webp');
const htmlmin = require('gulp-htmlmin');
const gcmq = require('gulp-group-css-media-queries');
const pug = require('gulp-pug');
const rename = require ("gulp-rename");
const cssnano = require ("gulp-cssnano");


sass.compiler = require('node-sass');

task('clean', () => {
    return src(`${DIST_PATH}/**/*`, {
            read: false
        })
        .pipe(rm());
});

task('copy:html', () => {
    return src(`${SRC_PATH}/*.pug`)

        // Конвертация pug в html
        .pipe(pug())
        .pipe(gulpif(env === 'prod', htmlmin({
            collapseWhitespace: true
        })))
        .pipe(dest(DIST_PATH))
        .pipe(browserSync.stream())
});

task('sass', () => {
    return src([...STYLE_LIBS, `${SRC_PATH}/scss/style.scss`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('style.scss'))
        // Импорт стилей в один
        .pipe(sassGlob())
        .pipe(gulpif(env === 'prod', autoprefixer({
            browsers: ['last 7 versions'],
            cascade: true
        })))
        .pipe(sass().on('error', sass.logError))
        .pipe(gcmq())
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(gulpif(env === 'prod', rename({
            suffix: ".min",
            extname: ".css"
        })))
        .pipe(gulpif(env === 'prod', cssnano({

       })))
        .pipe(dest(`${DIST_PATH}/css`))
        .pipe(browserSync.stream())
});

task('scripts', () => {
    return src([...JS_LIBS, `${SRC_PATH}/scripts/*.js`])
        .pipe(gulpif(env === 'dev', sourcemaps.init()))
        .pipe(concat('main.js'), {
            newLine: ';'
        })
        .pipe(gulpif(env === 'prod', babel({
            presets: ['@babel/env']
        })))
        .pipe(gulpif(env === 'prod', uglify()))
        .pipe(gulpif(env === 'dev', sourcemaps.write()))
        .pipe(gulpif(env === 'prod', rename({
            suffix: ".min",
            extname: ".js"
        })))
        .pipe(dest(`${DIST_PATH}/js`))
        .pipe(browserSync.stream())
});

task('server', () => {
    browserSync.init({
        server: {
            baseDir: "dist"
        },
        open: false
    });
});

task('watch', () => {
    watch(`${SRC_PATH}/scss/**/*.scss`, series('sass'));
    watch(`${SRC_PATH}/**/*.pug`, series('copy:html'));
    watch(`${SRC_PATH}/scripts/*.js`, series('scripts'));
    watch(`${SRC_PATH}/img/icons/*.svg`, series('svg'));
    watch(`${SRC_PATH}/img/*.+(png|jpg|jpeg)`, series('images'));
})

task('images', () =>
    src(`${SRC_PATH}/img/*.+(png|jpg|jpeg)`)
    // .pipe(webp())
    .pipe(dest(`${DIST_PATH}/img`))
);

task('svg', () => {
    return src(`${SRC_PATH}/img/icons/*.svg`)
        .pipe(dest(`${DIST_PATH}/img/icons`));
});

task('fonts', () =>
    src(`${SRC_PATH}/fonts/*`)
        .pipe(dest(`${DIST_PATH}/fonts`))
)


task('build', series('clean', parallel('copy:html', 'sass', 'scripts', 'images', 'svg', 'fonts')));

task('default', series('clean', parallel('copy:html', 'sass', 'scripts', 'images', 'svg', 'fonts'), parallel('server', 'watch')));