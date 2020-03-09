const { Draft } = require('../../connect/draft')
const getDraft = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Draft.find().sort().select('-num -__v')
    
    return res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getDraft