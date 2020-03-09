const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const sexSchema = new mongoose.Schema([
        {
            name: String,
            id: Number
        }
    ])

// 创建集合
const Sex = mongoose.model('Sex',sexSchema)
// 创建数据
// Sex.create([
//     {
//         name: '爷们'
//     },
//     {
//         name: '小女子'
//     },
//     {
//         name: '未设置'
//     }
//     ]).then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Sex
}