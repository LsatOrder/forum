const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const asideSchema = new mongoose.Schema([
        {
            name: String,
            children: [
                {
                    name: String,
                    path: String
                }
            ]
        }
    ])

// 创建集合
const Aside = mongoose.model('Aside',asideSchema)
// 创建数据
// Aside.create([
//         {
//             name: '用户管理',
//             children: [
//                 {
//                     name: '管理员',
//                     path: '/admin/manage'
//                 },
//                 {
//                     name: '论坛用户',
//                     path: '/admin/user'
//                 }
//             ]
//         },
//         {
//             name: '文章管理',
//             children: [
//                 {
//                     name: '所有文章',
//                     path: '/admin/allArticle'
//                 },
//                 {
//                     name: '热门贴',
//                     path: '/admin/popular'
//                 },
//                 {
//                     name: '置顶帖',
//                     path: '/admin/top'
//                 }
//             ]
//         },
//         {
//             name: '论坛数据',
//             children: [
//                 {
//                     name: '所有用户',
//                     path: '/admin/userData'
//                 },
//                 {
//                     name: '全部文章',
//                     path: '/admin/articleData'
//                 }
//             ]
//         }
//     ]).then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Aside
}