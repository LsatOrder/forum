const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const constellationSchema = new mongoose.Schema([
        {
            name: String,
            num: Number
        }
    ])

// 创建集合
const Constellation = mongoose.model('Constellation',constellationSchema)
// 创建数据
// Constellation.create([
//     {
//         name: '水瓶座',
//         num: 0
//       }, {
//         name: '双鱼座',
//         num: 1
//       }, {
//         name: '白羊座',
//         num: 2
//       }, {
//         name: '金牛座',
//         num: 3

//       }, {
//         name: '双子座',
//         num: 4

//       }, {
//         name: '巨蟹座',
//         num: 5

//       }, {
//         name: '狮子座',
//         num: 6

//       }, {
//         name: '处女座',
//         num: 7

//       }, {
//         name: '天秤座',
//         num: 8

//       }, {
//         name: '天蝎座',
//         num: 9

//       }, {
//         name: '射手座',
//         num: 10

//       }, {
//         name: '摩羯座',
//         num: 11

//       }
//     ]).then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Constellation
}