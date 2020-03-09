// 用到了用户集合所以在这里导入
const { User } = require('../connect/user')

const checkToken = async(req,res,next)=>{
    // 获取请求头中的authorization字段
    let arr = req.headers.authorization
    if(arr == null) return res.status(200).send({data:'',msg:'请重新登录',status: 401 })
    // 用户名和token以'.'拼接起来
    arr = arr.split('.')
    // 提取用户名和token
    const _id = arr[0]
    const token = arr[1]
    if(!_id ||!token) return res.status(200).send({data:'',msg:'请重新登录',status: 401 })
    // 查询对应用户的token
    let user = await User.findOne({_id})
    // 校验
    if(token !== user.token) return res.status(200).send({data:'',msg:'身份令牌已过期',status: 401 })
    // 校验成功则放行
    next()
}
module.exports = checkToken