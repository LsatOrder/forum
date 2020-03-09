const mongoose = require('mongoose')
// 创建评论数据集合规则
const commentSchema = new mongoose.Schema(
        {
            comuser: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Manage'
            },
            comarticle: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Article'
            },
            comment: String,
            commentDateNum: {
                type: Number,
            },
            commentDate: {
                type: String,
            },
            sign: {
                type: Boolean,
                default: false
            },
            children: Array,
            replyData: String
        }
    )

// 创建集合
const Comment = mongoose.model('Comment',commentSchema)
// 创建数据
// Comment.create().then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Comment
}