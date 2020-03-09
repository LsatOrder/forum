const { Constellation } = require('../../connect/constellation')
const getConstellationData = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Constellation.find().sort('num').select('-num -__v')
    
    return res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getConstellationData