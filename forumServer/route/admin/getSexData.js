const { Sex } = require('../../connect/sex')
const getSexData = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Sex.find().select('-__v').sort('id')
    data.splice(0,1);
    return res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getSexData