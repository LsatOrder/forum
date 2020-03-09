// 用到的集合在这里导入
const { Article } = require('../../connect/article')

const upOrDownArticleByID = async (req,res)=>{
    // 当前要查询的文章的_id
    const {_id,isup} = req.body
    if (isup) {
        // isup为true则说明是置顶操作
       const topnum = await Article.find({isup: true})
       if(topnum.length >= 3) return res.status(200).send({data: '' ,msg:'最多只能置顶3个',status: 401})
       const uptime = new Date().getTime()
       let data = await Article.updateOne({_id}, {isup,uptime})
       if (data.ok !== 1) return res.status(200).send({data: '' ,msg:'修改失败，请重试',status: 401})
       return res.status(200).send({data: req.body ,msg:'修改成功',status: 200})
   
    }else {
        // isup为false则说明是取消置顶操作
       const uptime = ''
       let data = await Article.updateOne({_id}, {isup,uptime})
       if (data.ok !== 1) return res.status(200).send({data: '' ,msg:'修改失败，请重试',status: 401})
       return res.status(200).send({data: req.body ,msg:'修改成功',status: 200})
   
    }

    // 查询数据库中的数据
}
module.exports = upOrDownArticleByID