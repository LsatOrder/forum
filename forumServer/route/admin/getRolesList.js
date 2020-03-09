// 用到的集合在这里导入
const { Role } = require('../../connect/role')

const getRolesList = async (req,res)=>{
    // 查询数据库中的数据
    let data = await Role.find()
    
    return res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getRolesList