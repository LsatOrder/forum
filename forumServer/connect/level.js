const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const levelSchema = new mongoose.Schema([
        {
            name: String,
            color: String
        }
    ])

// 创建集合
const Level = mongoose.model('Level',levelSchema)
// Level.create([
//     {
//         name: 'level1',
//         color: '#eee'
//     },
//     {
//         name: 'level2',
//         color: '#95ddb2'
//     },
//     {
//         name: 'level3',
//         color: '#92d1e5'
//     },
//     {
//         name: 'level4',
//         color: '#ffb37c'
//     },
//     {
//         name: 'level5',
//         color: '#ff6c00'
//     },
//     {
//         name: 'level6',
//         color: '#ff0000'
//     }
//     ]).then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })

module.exports = {
    Level
}