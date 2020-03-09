// 用到的集合在这里导入
const { Article } = require('../../connect/article')

const setClickNumShow = async (req,res)=>{
    // 当前要查询的文章的_id
    const {_id,clicknumshow} = req.body
        // isup为true则说明是从不显示改为显示
       let data = await Article.updateOne({_id}, {clicknumshow})
       if (data.ok !== 1) return res.status(200).send({data: '' ,msg:'修改失败，请重试',status: 401})
       return res.status(200).send({data: req.body ,msg:'修改成功',status: 200})
   
    }

    // 查询数据库中的数据
module.exports = setClickNumShow