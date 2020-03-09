const {User} = require('../../connect/user')

const getUserList = async (req,res)=>{
    // 当前页码
    let pagenum = req.body.pagenum
    // 当前每页显示多少条数据
    let pagesize = req.body.pagesize 
    // 数据库中含有多少数据
    let count = await User.countDocuments({})
    // 计算总页数：总数据/每页显示多少，向上取整
    let pages = Math.ceil(count/pagesize)
    let start = (pagenum -1)*pagesize
    // 结构出传递的查询关键字
    let searchVal = req.body.query.trim()
    // 设置返回数据
    function resData(data,allData) {
        // 应显示的数据查到了多少条数据
        let count = data.length
        // 数据库中包含该字段的总共有多少条数据
        let num = allData.length
        // 可分多少页
        let pages = Math.ceil(count/num)
        // 返回数据
        return res.status(200).send({data: data,msg:'请求成功',status: 200,total: num,pages: pages })
    }
    // 如果有关键字
    if(searchVal !== '') {
        let data1 = await User.find({
            $or: [ 
                {username: {$regex: searchVal }},
                {email: {$regex: searchVal}},
                {phone: {$regex: searchVal}}
            ]
        }).populate('role').limit(pagesize).skip(start).select('-password -token')
        let data2 = await User.find({
            $or: [ 
                {username: {$regex: searchVal }},
                {email: {$regex: searchVal}},
                {phone: {$regex: searchVal}}
            ]
        }).populate('role')
        return resData(data1,data2)
    }
    // 查询数据库中的所有数据
    let data = await User.find().populate('role').limit(pagesize).skip(start).select('-password -token')
    // 整理数据格式
    
    // 返回数据
    return res.status(200).send({data: data,msg:'请求成功',status: 200,total: count,pages: pages })
}
module.exports = getUserList