'use strict';

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// 默认任务
gulp.task('default', ['server', 'auto']);

//将utils下的js打包一个utils
gulp.task('script', function() {
  gulp.src(['utils/com.js', 'utils/plug.js', 'libs/easing/easing.js'])
      .pipe(concat('index.js'))
      .pipe(gulp.dest('utils'))
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('utils'));
});

// 创建文件修改监听任务
gulp.task('auto', function() {
  // 源码有改动就进行压缩以及热刷新
  gulp.watch('utils/*.js', ['script']);
  // gulp.watch('src/*/*.css', ['reload']);
  gulp.watch('src/*/*.html', ['reload']);
});

// 编译后的css将注入到浏览器里实现更新
gulp.task('css', function() {
  return gulp.src('src/*/*.css')
      // .pipe(gulp.dest("src/css"))
      .pipe(reload({stream: true}));
});

// 创建热加载任务
gulp.task('reload', function() {
  gulp.src('src/*')
      .pipe(connect.reload());
  console.log('html change');
});

// gulp服务器
gulp.task('server', function() {
  connect.server({
    root: '',
    port: 8888,
    livereload: true
  });
  browserSync.init({
    server: ''
  });
  gulp.watch('src/*/*.css', ['css']);
  gulp.watch('src/*/*.html').on('change', reload);
});