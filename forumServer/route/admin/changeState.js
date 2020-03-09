const {User} = require('../../connect/user')

const changeState = async (req,res)=>{
    // 请求携带参数中有用户名和状态值
    let user = req.body.username
    let state = req.body.state
    // 数据库查询并修改
    User.updateOne({username: user},{state}).then(result=>{
        if(result.ok !== 1) return res.status(200).send({data: '',msg:'修改失败请重试',status: 500 })
    })
    // 返回数据
    return res.status(200).send({data: '',msg:'修改成功',status: 200 })
}
module.exports = changeState