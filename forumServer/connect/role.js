const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const roleSchema = new mongoose.Schema(
        {
            role: String,
            introduce: String,
            del: {
                type: Boolean,
                default: false
            },
            children: [
                {
                    state: {
                        type: Boolean,
                        default: true
                    },
                    name: {
                        type: String
                    }
                }
            ]
            
        }
    )

// 创建集合
const Role = mongoose.model('Role',roleSchema)
// 创建数据
// Role.create({
//     role: 'user'
// }).then(()=>{
//     console.log('1');
// }).catch(()=>{
//     console.log('2');
// })
module.exports = {
    Role
}