// 用到的集合在这里导入
const { Role } = require('../../connect/role')

const addRole = async (req,res)=>{
    const role = req.body.role
    const introduce = req.body.introduce
    const write = req.body.write
    const comment = req.body.comment
    const login = req.body.login
    Role.create({
        role,
        introduce,
        children: [
            {
                name: '权限：写',
                state: write
            },{
                name: '权限：评论',
                state: comment
            },{
                name: '权限：登录',
                state: login
            }
        ]
    }).then(()=>{
       return res.status(200).send({data:'',msg:'创建角色成功',status: 200 })
    }).catch((err)=>{
       return res.status(200).send({data:'',msg:'创建角色失败',status: 200 })
    })
}
module.exports = addRole