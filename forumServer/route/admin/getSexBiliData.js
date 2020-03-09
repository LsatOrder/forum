const { User } = require('../../connect/user')
const getSexBiliData = async (req,res)=>{
    // 查询数据库中的数据
    let boy = await User.countDocuments({sex:'5e3abbd2156ed8b3e89a0418'})
    let girl = await User.countDocuments({sex:'5e3abbd2156ed8b3e89a0419'})
    let unknown = await User.countDocuments({sex:'5e3abbd2156ed8b3e89a041a'})
    return res.status(200).send({data:{
        boy,
        girl,
        unknown
    } ,msg:'请求成功',status: 200})
}
module.exports = getSexBiliData 