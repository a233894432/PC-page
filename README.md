# 备案大师
## technology stack
多页面架构

> gulp + requireJs + dot + AmazeUI + jquery + mock

> npm install 安装依赖

>gulp //启动服务器
## 打包
>node r.js -o build.js //编译src文件&&压缩js、css

>gulp minifyjs //打包utils

>node test.js //压缩html

# 解决谷歌跨域
找到谷歌浏览器目录最后添加:
  --args   --disable-web-security   --user-data-dir
