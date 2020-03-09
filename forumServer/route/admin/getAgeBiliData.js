const { User } = require('../../connect/user')

const getSexBiliData = async (req,res)=>{
    // 查询数据库中的数据
    // $gt:大于 $lt:小于 $gte:大于或等于 $lte:小于或等于
    // { "field" : { $gt: value1, $lt: value2 } }
    let data1 = await User.countDocuments({ "info.age" : { $lt: 18 }})
    let data2 = await User.countDocuments({ "info.age" : { $gte: 18 , $lt: 25 }})
    let data3 = await User.countDocuments({ "info.age" : { $gte: 25 , $lt: 30 }})
    let data4 = await User.countDocuments({ "info.age" : { $gt: 30 }})
    return res.status(200).send({data: [data1,data2,data3,data4] ,msg:'请求成功',status: 200})
}
module.exports = getSexBiliData