const mongoose = require('mongoose')
// 创建文章数据集合规则
const articleSchema = new mongoose.Schema([
        {
            clicknum: {
                type: Number,
                default: 0 
            }
        }
    ])
// 创建集合
const Article = mongoose.model('Article',articleSchema)
// 创建数据
// Article.create().then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Article
}