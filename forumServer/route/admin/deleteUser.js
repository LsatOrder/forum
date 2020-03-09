// 用到的集合在这里导入
const { User } = require('../../connect/user')

const deleteUser = async (req,res)=>{
    // 当前要查询的用户的_id
    const _id = req.body._id
    // 查询该用户是否存在
    User.findOne({_id}).then(async result =>{
        // result为null则该用户不存在
        if(!result) return res.status(200).send({data: '' ,msg:'删除失败！请刷新页面重试',status: 401})
        // 删除该用户
        let data = await User.findByIdAndDelete(_id)
        if(!data) return res.status(200).send({data: '' ,msg:'删除失败！请刷新页面重试',status: 401})
        return res.status(200).send({data: '' ,msg:'删除成功',status: 200})
    })

    // 删除数据库中对应id的数据
    // 删除失败
}
module.exports = deleteUser