const gulp = require("gulp");
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const browserify = require("browserify");
const babelify = require("babelify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const uglify = require("gulp-uglify");


function cssBuild() {
    return gulp
        .src(`./public/docsuikit/assets/css/*.css`)
        .bundle()
        .pipe(postcss([cssnano()]))
        .pipe(gulp.dest(`./public/docsuikit/assets/css/`));
}

function javascriptBuild() {
  return (
      browserify({
          entries: [[
            './public/docsuikit/assets/js/main.js',
            './public/docsuikit/assets/js/autocomplete.js',
            './public/docsuikit/assets/js/custom-scrollbar.js'
            // './public/docsuikit/assets/js/sticky-sidebar.js',
            // './public/docsuikit/assets/js/header-fixing.js',
            // './public/docsuikit/assets/js/theme-custom.js'
          ]],
          transform: [babelify.configure({ presets: ["@babel/preset-env"] })]
      })
          .bundle()
          .pipe(source("bundle.js"))
          // Turn it into a buffer!
          .pipe(buffer())
          // And uglify
          .pipe(uglify())
          .pipe(gulp.dest(`./public/docsuikit/assets/js/`))
  );
}

exports.dist = gulp.parallel(cssBuild, javascriptBuild);
