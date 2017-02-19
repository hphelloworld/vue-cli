# vue-multiple-pages

>Vue2.0多页应用

## Links 依赖链接

1. [Vue](https://github.com/vuejs/vue)
2. [Webpack](https://github.com/webpack/webpack)
3. [Element](https://github.com/dcloudio/mui)

## Start 开始

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

``` bash
npm install
```

## Develop 开发构建

``` bash
# serve with hot reload at localhost:8080
npm run dev

```

[http://localhost:8080/login.html](http://localhost:8080/login.html)

[http://localhost:8080/index.html](http://localhost:8080/index.html)

## Build 生产构建

``` bash
# build for production with minification
npm run build
node server.js
```

[http://localhost:8800/user/login.html](http://localhost:8800/login.html)

## Folder Structure 文件目录

```bash
├── src             # 主目录
│    ├── assets     # 资源目录
│    │    ├── css   # css
│    │    ├── fonts # fonts
│    │    ├── img   # img
│    │    └── js    # js
│    ├── components # 自定义组件目录
│    └── pages      # 页面目录
│         ├── index  # index 页面
│         │    ├── app.js    # 入口js
│         │    ├── app.html  # html模板
│         │    └── app.vue   # index 页面组件
│         └── login  # login 页面
│              ├── app.js    # 入口js
│              ├── app.html  # html模板
│              └── app.vue   # login 页面组件
├── dist            # npm run build生成的目录
├── node_modules    # dependencies
├── .babelrc        # babel文件
├── server.js       # 用于查看npm run build的server.js，端口8800
├── webpack.config.js # webpack配置目录
├── node_modules    # dependencies
└── package.json    # package info
```
