const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const englishLevelSchema = new mongoose.Schema([
        {
            name: String
        }
    ])

// 创建集合
const EnglishLevel = mongoose.model('EnglishLevel',englishLevelSchema)
EnglishLevel.create([
    {
        name: '',
    }
    ]).then(()=>{
    console.log('1');
}).catch(()=>{
    console.log('2');
})

module.exports = {
    EnglishLevel
}