// 用到了用户集合所以在这里导入
const { User } = require('../../connect/user')

const logout = async (req,res)=>{
    // todo:清楚数据库里该用户的token
    // 如果查询到了用户，user变量的值是对象类型
    // 如果没查到用户，user变量为空
    let arr = req.headers.authorization
    // 用户名和token以'.'拼接起来
    arr = arr.split('.')
    // 提取用户名
    const username = arr[0]
    // 更新用户的token
    User.updateOne({username},{token: ''}).then(result=>{
        // console.log(result);
    })
    return res.status(200).send({data:'',msg:'退出成功',status: 200 })
}
module.exports = logout