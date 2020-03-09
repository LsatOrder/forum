const mongoose = require('mongoose')
// 创建文章数据集合规则
const draftSchema = new mongoose.Schema([
        {
            title: String,
            author: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Manage',
            },
            detail: String,
            cover: String,
        }
    ])
// 创建集合
const Draft = mongoose.model('Draft',draftSchema)
// 创建数据
// Article.create().then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Draft
}