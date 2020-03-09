const mongoose = require('mongoose')
// 创建侧边栏数据集合规则
const verificationCodeSchema = new mongoose.Schema(
        {
            code: String
        }
    )

// 创建集合
const verificationCode = mongoose.model('verificationCode',verificationCodeSchema)

module.exports = {
    verificationCode
}