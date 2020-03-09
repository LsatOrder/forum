const express = require('express');
const home = express.Router()

// 登录
home.post('/login',require('./home/login'))
home.get('/logout',require('./home/logout'))
// 获取侧边栏数据
home.get('/getAsideData',require('./home/getAsideData'))
// 获取邮箱验证码
home.post('/getCode',require('./home/email'))
// 校验用户名是否重复
home.post('/checkusername',require('./home/checkusername'))
// 校验验证码成功则注册用户
home.post('/checkVcode',require('./home/checkVcode'))
// 注册成功时自动登录，添加登录记录
home.post('/addLoginNotes',require('./home/addLoginNotes'))

module.exports = home