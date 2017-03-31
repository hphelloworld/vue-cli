# vue-cli

#### 基本使用方法
  使用方法与vue官方的vue-cli基本是一样的，只是不过改了下配置变成了多页面应用的脚手架。
  主要文件目录是src目录。
  
  1,assets为静态资源文件目录，里面存放公共的js,css,img等资源文件;
  
  2,js为入口文件目录，每一个单页面的入口js应该和pages下的html命名相同，比如user.js和user.html;
  
  3,modules为vue的组件目录，里面存放各个页面或者公共的组件;
  
  4,pages为各个页面的入口页面，命名规范与js目录一致;
  
  5,routet为各个页面的路由js存放目录，可以按需添加，命名建议保持一致。
  
  6,store为各个页面组件状态管理目录，可以按需添加，命名建议保持一致。

#### 基本构建命令
  `npm install` 安装依赖模块（其他命令必须在运行完此命令后才能调用！）

  `npm run dev` 开启测试环境，在测试环境下开发  
  
  `npm run build` 发布正式版本  
  
  

