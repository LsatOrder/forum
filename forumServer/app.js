// 引入express框架
const express = require('express');
// 引入bodyParser模块处理post参数
const bodyParser = require('body-parser')
// 引入session模块
const session = require('express-session')
const log = require('./config/log')
// 创建网站服务器
require('./route/fsSetTimer')()
const app = express()
// 连接数据库
require('./connect/mongodb')
// extended: false 使用node.js内置模块querystring处理请求参数的格式
// extended: true 使用第三方模块qs处理请求参数的格式
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type,Authorization");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.sendStatus(200);  //让options尝试请求快速结束
    else
        next();
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
    resave: false, //添加 resave 选项
    saveUninitialized: true, //添加 saveUninitialized 选项
    secret: "secret key"}))
// 请求'/'也是用户请求
app.use('/',require('./route/home'))
// 请求资源
app.use('/public',require('./public/file'))
// 用户请求
app.use('/home',require('./route/home'))
// 管理系统请求
app.use('/admin',require('./route/admin'))
// 错误处理中间件
// app.use((err,req,res,next)=>{
//     console.log(err)
//     return res.status(500).send({data: '' ,msg:'服务器内部错误',status: 500})
// })
app.use(async (ctx, next) => {
    //响应开始时间
    const start = new Date();
    //响应间隔时间
    var ms;
    try {
        //开始进入到下一个中间件
        await next();

        ms = new Date() - start;
        //记录响应日志
        log.i(ctx, ms);

    } catch (error) {

        ms = new Date() - start;
        //记录异常日志
        log.e(ctx, error, ms);
    }

console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})
// 监听端口
app.listen(3000);
console.log('http://localhost:3000')