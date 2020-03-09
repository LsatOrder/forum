const express = require('express');
const admin = express.Router()
// require('../connect/constellation')
// 登录
admin.post('/login',require('./admin/login'))
// 退出登录
admin.get('/logout',require('./admin/logout'))
// 除了登录和退出以外，拦截所有请求检测是否有authorization并核对
// 上传图片
admin.post('/uploads',require('./upload'))
admin.use(require('./checkToken'))
// 获取侧边栏数据
admin.get('/getAsideData',require('./admin/getAsideData'))
// 获取所有管理员
admin.post('/getUserList',require('./admin/getUserList'))
// 修改管理员状态
admin.post('/changeState',require('./admin/changeState'))
// 添加新用户
admin.post('/addNewUser',require('./admin/addNewUser'))
// 根据_id获取用户信息
admin.post('/getUserData', require('./admin/getUserData'))
// 修改用户信息
admin.post('/updataUserData',require('./admin/updataUserData'))
// 删除用户
admin.post('/deleteUser',require('./admin/deleteUser'))
// 获取角色列表
admin.get('/getRolesList',require('./admin/getRolesList'))
// 添加新角色
admin.post('/addRole',require('./admin/addRole'))
// 修改角色
admin.post('/editRole',require('./admin/editRole'))
// 删除角色
admin.post('/delRole',require('./admin/delRole'))
// 设置角色
admin.post('/setRole',require('./admin/setRole'))
// 获取全部星座数据
admin.get('/getConstellationData',require('./admin/getConstellationData'))
// 获取全部性别数据
admin.get('/getSexData',require('./admin/getSexData'))
// 发布文章
admin.post('/publishActicle', require('./admin/publishActicle'))
// 获取所有人的全部文章
admin.post('/getAllActicle',require('./admin/getAllActicle'))
// 根据作者id获取文章
admin.post('/getAllActicleByID',require('./admin/getAllActicleByID'))
// 根据文章id查询文章
admin.post('/getActicleByID',require('./admin/getActicleByID'))
// 根据文章id删除文章
admin.post('/deleteArticleByID',require('./admin/deleteArticleByID'))
// 根据文章id置顶文章
admin.post('/upOrDownArticleByID',require('./admin/upOrDownArticleByID'))
// 获取置顶文章
admin.post('/getTopActicle',require('./admin/getTopActicle'))
// 获取热门文章
admin.post('/getPopularArticle',require('./admin/getPopularArticle'))
// 设置热门文章的clicknumshow
admin.post('/setclicknumshow',require('./admin/setClickNumShow'))
// 存为草稿
admin.post('/saveToBeDraft',require('./admin/saveToBeDraft'))
// 获取草稿箱的文章
admin.get('/getDraft',require('./admin/getDraft'))
// 根据id查询草稿
admin.post('/getDraftByID',require('./admin/getDraftByID'))
// 根据id修改草稿
admin.post('/editDraftByID',require('./admin/editDraftByID'))
// 根据id删除草稿
admin.post('/deleteDraftByID',require('./admin/deleteDraftByID'))
// 获取登录记录
admin.post('/getLoginNotes',require('./admin/getLoginNotes'))
// 获取性别比例数据
admin.post('/getSexBiliData',require('./admin/getSexBiliData'))
// 获取所有用户的星座数据
admin.post('/getConstellationBiliData',require('./admin/getConstellationBiliData'))
// 获取用户等级数据
admin.post('/getLevelBiliData',require('./admin/getLevelBiliData'))
// 获取年龄分层数据
admin.post('/getAgeBiliData',require('./admin/getAgeBiliData'))
// 获取最近7天新增用户
admin.get('/getUserNum',require('./admin/getUserNum'))
// 获取最近7新增文章
admin.get('/getArticleNum',require('./admin/getArticleNum'))
// 根据文章id获取该文章的评论
admin.post('/getCommentByActicleID',require('./admin/getCommentByActicleID'))
// 发布评论
admin.post('/toComment',require('./admin/toComment'))
// 根据评论id回复评论
admin.post('/replyAtCommentID',require('./admin/replyAtCommentID'))
// 设置禁言
admin.post('/noSpeaking',require('./admin/noSpeaking'))
// 解除禁言
admin.post('/closeNoSeaking',require('./admin/closeNoSeaking'))
// 保存文章的修改
admin.post('/upDataActicleByID',require('./admin/upDataActicleByID'))
// 文章热度+1
admin.post('/clickArticle',require('./admin/clickArticle'))
module.exports = admin
