// 用到的集合在这里导入
const { User } = require('../../connect/user')

const updataUserData = async (req,res)=>{
    // 当前要查询的用户的_id
    let _id = req.body._id
    // 查询数据库中的数据
    let data = await User.updateOne({_id},req.body).select('-role -state -token')
    if (data.ok !== 1) return res.status(200).send({data: '' ,msg:'修改失败，请重试',status: 401})
    return res.status(200).send({data: '' ,msg:'修改成功',status: 200})
}
module.exports = updataUserData