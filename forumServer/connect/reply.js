const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const replySchema = new mongoose.Schema(
        {
            // 谁
            replyuser: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Manage'
            },
            // 评论了谁
            replyto: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Manage'
            },
            // 哪条评论
            replycomment: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment'
            },
            // 评论了啥
            reply: String,
            // 评论时间的毫秒数
            replyDateNum: {
                type: Number,
            },
            // 评论时间
            replyDate: {
                type: String,
            }
        }
    )

// 创建集合
const Reply = mongoose.model('Reply',replySchema)
// 创建数据
// Comment.create().then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Reply
}