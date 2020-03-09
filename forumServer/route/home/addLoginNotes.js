const { loginNotes } = require('../../connect/loginNotes')
const addLoginNotes = (req , res)=>{
    // 创建登录记录
    const {username,logintime} = req.body
    let dataID = new Date().getTime()
    loginNotes.create({
        username,
        logintime,
        dataID
    }).then(()=>{
        // 创建成功
    }).catch(()=>{
        // 创建失败
    })
    return res.status(200).send({data:'',msg:'添加记录成功',status: 200 })
}
module.exports = addLoginNotes
