// 用到了Aside集合 按需导入
const {Aside} = require('../../connect/aside')

const getAsideData = async (req,res)=>{
    // 查询侧边栏数据
    let data = await Aside.find({sign: 0}).sort('__v')
    
    // 返回侧边栏数据
    return res.status(200).send({data:data,msg:'请求成功',status: 200 })
}
module.exports = getAsideData