const { Article } = require('../../connect/article')
const getTopArticleData = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Article.find({isup: true}).select('-__v').sort('-uptime').populate('author')
    return res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getTopArticleData