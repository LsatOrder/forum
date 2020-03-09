// 用到了用户集合所以在这里导入
const { User } = require('../../connect/user')
// 登录成功的时候要有登录记录
const { loginNotes } = require('../../connect/loginNotes')

const login = async (req,res)=>{
    // todo:数据库操作，然后返回数据
    // 接受请求参数,解构为字段与数据库相同
    const { email , password , logintime } = req.body
    // 如果查询到了用户，user变量的值是对象类型
    // 如果没查到用户，user变量为空
    let user = await User.findOne({email}).populate('role')
    if(!user) return res.status(200).send({data:'',msg:'用户不存在',status: 400 })
    if(user.role._id != '5e36b2d24acc7abbd4244605') return res.status(200).send({data:'',msg:'该用户不是管理员，无法登陆管理系统',status: 400 })
    if(!user.state) return res.status(200).send({data:'',msg:'管理员状态未激活',status: 400 })
    const username = user.username
    // if(!user.role.children[2].state) return res.status(200).send({data:'',msg:'用户被禁止登陆，详情联系管理员',status: 400 })
    if(password == user.password){
        // 数据库中该用户的token值修改为登录时生成的token，方便核对
        User.updateOne({email},{token: req.sessionID}).then(result=>{
            // console.log(result);
        })
        let dataID = new Date().getTime()
        // 创建登录记录
        loginNotes.create({
            username,
            logintime,
            dataID
        }).then(()=>{
            // 创建成功
        }).catch(()=>{
            // 创建失败
        })
    return res.status(200).send({data:{
        user: user.username,
        sessionID:req.sessionID,
        _id: user._id,
        roleID: user.role._id,
        userheader: ''},msg:'登录成功',status: 200 })
    }
    return res.status(200).send({data:'',msg:'用户名或者密码错误',status: 403 })
}
module.exports = login