const { User } = require('../../connect/user')

const getSexBiliData = async (req,res)=>{
    // 查询数据库中的数据
    let data1 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dbc' })
    let data2 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dbd' })
    let data3 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dbf' })
    let data4 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dbe' })
    let data5 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dc0' })
    let data6 = await User.countDocuments({ "level" : '5e3c130db9ade3ba30225dc1' })
    return res.status(200).send({data:[data1,data2,data3,data4,data5,data6] ,msg:'请求成功',status: 200})
}
module.exports = getSexBiliData