// 用到的集合在这里导入
const { User } = require('../../connect/user')

const addNewUser = async (req,res)=>{
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password
    const phone = req.body.phone
    const realname = req.body.realname
    User.create({
        username,
        email,
        password,
        phone,
        realname
    }).then(()=>{
       return res.status(200).send({data:'',msg:'创建用户成功',status: 200 })
    }).catch((err)=>{
       return res.status(200).send({data:'',msg:'创建用户失败',status: 200 })
    })
}
module.exports = addNewUser