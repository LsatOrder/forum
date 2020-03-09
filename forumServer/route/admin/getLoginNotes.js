// 用到的集合在这里导入
const { loginNotes } = require('../../connect/loginNotes')

const getLoginNotes = async (req,res)=>{
    // 当前页码
    let pagenum = req.body.pagenum
    // 当前每页显示多少条数据
    let pagesize = req.body.pagesize 
    // 数据库中含有多少数据
    let count = await loginNotes.countDocuments({})
    // 计算总页数：总数据/每页显示多少，向上取整
    let pages = Math.ceil(count/pagesize)
    let start = (pagenum -1)*pagesize
    // 查询数据库中的数据
    let data = await loginNotes.find().limit(pagesize).skip(start).sort('-dataID')
    
    return res.status(200).send({data:data,msg:'请求成功',status: 200 ,total: count, page:pages})
}
module.exports = getLoginNotes