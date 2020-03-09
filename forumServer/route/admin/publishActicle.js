// 用到的集合在这里导入
const { Article } = require('../../connect/article')

const publishActicle = async (req,res)=>{
    // 结构数据
    const {title,author,detail,cover,publishtime,publishtimeCN} = req.body
    const timer = new Date(publishtime).getTime()
    // 创建文章
    Article.create({
        title,author,detail,cover,publishtimeCN,publishtime:timer
    }).then(()=>{
       return res.status(200).send({data:'',msg:'发布文章成功',status: 200 })
    }).catch((err)=>{
       return res.status(200).send({data:'',msg:'发布文章失败',status: 200 })
    })
}
module.exports = publishActicle