const { Article } = require('../../connect/article')
const upDataActicleByID = async (req,res)=>{
    // 解构数据
    
    const { _id, detail, articleTitle, imageUrl } = req.body
    // 查询数据库中的数据并修改
    let data = await Article.updateOne({ _id } ,{detail, title:articleTitle, cover:imageUrl})
    return res.status(200).send({data:'ok' ,msg:'保存成功',status: 200})
} 
module.exports = upDataActicleByID