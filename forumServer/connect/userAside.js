const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const userAsideSchema = new mongoose.Schema([
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
const userAside = mongoose.model('userAside',userAsideSchema)
// 创建数据
userAside.create([
        {
            name: '论坛数据',
            children: [
                {
                    name: '所有用户',
                    path: '/admin/userData'
                },
                {
                    name: '全部文章',
                    path: '/admin/articleData'
                }
            ]
        }
    ]).then(()=>{
    console.log('1');
}).catch(()=>{
    console.log('2');
})
module.exports = {
    userAside
}