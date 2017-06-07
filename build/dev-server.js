//获取config/index的默认配置
var config = require('../config')
//如果node的环境无法判断当前是dev还是product 环境，就是用config.dev.env.NODE_ENV 作为当前的环境
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
//nodejs的path模块--路径工具
var path = require('path')
//引用express框架
var express = require('express')
//使用webpack
var webpack = require('webpack')
//一个可以强制打开浏览器并跳转到指定url的插件
var opn = require('opn')
//代理中间件插件
var proxyMiddleware = require('http-proxy-middleware')
//使用 dev 环境的webpack 配置
var webpackConfig = require('./webpack.dev.conf')

// 如果没有指定运行端口，使用config.dev.port作为运行端口
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
//使用express启动一个服务
var server = express()
//启动webpack进行编译
var compiler = webpack(webpackConfig)
//启动webpack-dev-middleware，将编译后的文件暂存到内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})
//启动webpack-hot-middleware,也就是我们常说的Hot-reload
var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})
// 将proxyTable 中的请求配置挂在启动的express 服务上
var context = config.dev.context
var proxypath = config.dev.proxypath

var options = {
    target: proxypath,
    changeOrigin: true,
}
if (context.length) {
    server.use(proxyMiddleware(context, options))
}

// server.use(proxyMiddleware('/*/*', {
//     target: 'https://mainsite-restapi.ele.me',
//     changeOrigin: true,
//     secure: false,
// }))


// 使用 connect-hisory-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
server.use(require('connect-history-api-fallback')())

//将暂存到内存中的webpack编译后的文件挂载到express服务上
server.use(devMiddleware)

// 将hot-reload挂载到express服务上
server.use(hotMiddleware)

//拼接到static文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
//为静态资源提供相应服务
server.use(staticPath, express.static('./static'))

module.exports = server.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        //opn(uri)
    }
})