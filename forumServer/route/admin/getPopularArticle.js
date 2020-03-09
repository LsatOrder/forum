const { Article } = require('../../connect/article')
const getPopularArticle = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Article.find({clicknumshow: true}).select('-__v').sort('-clicknum').populate('author').limit(12)
    return res.status(200).send({data:[
        [data[0],data[1],data[2]],
        [data[3],data[4],data[5]],
        [data[6],data[7],data[8]],
        [data[9],data[10],data[11]]
    ] ,msg:'请求成功',status: 200})
}
module.exports = getPopularArticle