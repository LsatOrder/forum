const { Article } = require('../../connect/article')

const clickArticle = async(req,res)=>{
    let { clicknum, _id } = req.body
    clicknum+=1
    const data = await Article.updateOne({_id}, {clicknum})
    return res.status(200).send({data:'ok' ,msg:'点击量增加成功',status: 200})
}
module.exports = clickArticle
