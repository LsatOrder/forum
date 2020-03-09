// 按需导入集合
const {User} = require('../../connect/user')

const setRole = async (req,res)=>{
    const {userID,selectID} = req.body
    let data = await User.updateOne({_id:userID},{ role: selectID}).select('-role -state -token')
    return res.status(200).send({data:'',msg:'请求成功',status: 200 })
}
module.exports = setRole