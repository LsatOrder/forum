// 用到了Aside集合 按需导入
const {Draft} = require('../../connect/draft')

const getDraftByID = async (req,res)=>{
    const _id = req.body._id
    
    // 查询侧边栏数据
    let data = await Draft.find({_id}).populate({ path: 'author', select: 'username _id' })
    // 返回侧边栏数据
    return res.status(200).send({data:data,msg:'请求成功',status: 200 })
}
module.exports = getDraftByID