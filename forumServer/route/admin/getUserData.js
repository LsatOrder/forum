// 用到的集合在这里导入
const { User } = require('../../connect/user')
require('../../connect/sex')
require('../../connect/level')
const getUserData = async (req,res)=>{
    // 当前要查询的用户的_id
    let _id = req.body._id
    
    // 查询数据库中的数据
    let data = await User.findOne({_id}).select('-state -token -__v')
                         .populate({ path: 'sex', select: 'name' })
                         .populate({ path: 'level', select: 'name color' })
                         .populate({ path: 'role', select: 'role introduce' })
    
    res.status(200).send({data:data ,msg:'请求成功',status: 200})
}
module.exports = getUserData