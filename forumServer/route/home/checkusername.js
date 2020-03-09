// 用到了用户集合所以在这里导入
const { User } = require('../../connect/user')

const checkusername = async (req,res)=>{
    const username = req.body.username
    const data = await User.find({username})
    if(!data[0]) return res.status(200).send({data:'',msg:'该用户名可以使用',status: 200 })
    return res.status(200).send({data:'',msg:'该用户名不可使用',status: 201 })
}
module.exports = checkusername