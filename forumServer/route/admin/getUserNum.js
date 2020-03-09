// 用到了Aside集合 按需导入
const { User } = require('../../connect/user')

const getAsideData = async (req,res)=>{
    // 当前时间点的毫秒数
    const today = new Date().getTime()
    // 当前时间是哪一天
    const todayDay = new Date().toLocaleDateString()
    // 一天的毫秒
    const neoDay = 24*60*60*1000
    // 最近7天所对应的毫秒
    const day1 = new Date(todayDay).getTime() // 今天
    const day2 = day1 - neoDay * 1            // 昨天
    const day3 = day1 - neoDay * 2            // 依次类推
    const day4 = day1 - neoDay * 3
    const day5 = day1 - neoDay * 4
    const day6 = day1 - neoDay * 5
    const day7 = day1 - neoDay * 6
    // 最近7天对应的日期
    const day2date = new Date(day2).toLocaleDateString()
    const day3date = new Date(day3).toLocaleDateString()
    const day4date = new Date(day4).toLocaleDateString()
    const day5date = new Date(day5).toLocaleDateString()
    const day6date = new Date(day6).toLocaleDateString()
    const day7date = new Date(day7).toLocaleDateString()
    
    let day1data = await User.countDocuments({ "registertime" : { $lte: today , $gt: day1 }})
    let day2data = await User.countDocuments({ "registertime" : { $lte: day1 , $gt: day2 }})
    let day3data = await User.countDocuments({ "registertime" : { $lte: day2 , $gt: day3 }})
    let day4data = await User.countDocuments({ "registertime" : { $lte: day3 , $gt: day4 }})
    let day5data = await User.countDocuments({ "registertime" : { $lte: day4 , $gt: day5 }})
    let day6data = await User.countDocuments({ "registertime" : { $lte: day5 , $gt: day6 }})
    let day7data = await User.countDocuments({ "registertime" : { $lte: day6 , $gt: day7 }})
    const total = await User.countDocuments({})
    // 返回侧边栏数据
    return res.status(200).send({data:{
        total,
        day: [day7date.substring(5),day6date.substring(5),day5date.substring(5),day4date.substring(5),day3date.substring(5),day2date.substring(5),todayDay.substring(5)],
        data: [day7data,day6data,day5data,day4data,day3data,day2data,day1data]
    },msg:'请求成功',status: 200 })
}
module.exports = getAsideData