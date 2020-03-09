const {verificationCode:Code} = require('../../connect/verificationCode')
const { User } = require('../../connect/user')

const checkVcode = async (req , res)=>{
    const { _id,username,password,email,realname,imageUrl,code} = req.body
    // 校验验证码
    const res1 = await Code.find({_id})
    if (res1[0].code != code) return res.status(200).send({data:'',msg:'验证码错误！请重试',status: 201 })
    // 注册用户
    let res2 =await User.create({
        username,password,email,realname, "info.header":imageUrl,token:req.sessionID
    })
    // 返回信息
    return res.status(200).send({data:{
        sessionID:req.sessionID,
        user: res2.username,
        _id: res2._id,
        roleID: res2.role
    },msg:'注册成功',status: 200 })

}
module.exports = checkVcode
