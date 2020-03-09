const mongoose = require('mongoose')
// 创建用户集合规则
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    realname:{
        type: String,
        required: true,
    },
    // 禁言时间
    noSpeaking:{
        type: String,
        default: ''
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
        default: '5e36b2d8103fbf9c2442f050'
    },
    phone: {
        type: String,
    },
    registertime:{
        type: String,
        default: new Date().getTime()
    },
    // 启用状态：true      禁用状态：false
    state:{
        type: Boolean,
        default: false 
    },
    token:{
        type: String,
        default: ''
    },
    sex: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sex',
        default: '5e3abbd2156ed8b3e89a041a'
    },
    // 站内等级
    level: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Level',
        default: '5e3c130db9ade3ba30225dbc'
    },
    info:{
        age: {
            type: Number,
            default: ''
        },
        // 生日
        birthday: {
            type: String,
            default: ''
        },
        // 星座
        constellation: {
            type: String,
            default: ''
        },
        // 签名
        autograph: {
            type: String,
            default: ''
        },
        header: {
            type: String,
            default: ''
        }
    }
    
})

// 创建集合
const User = mongoose.model('Manage',userSchema)

module.exports = {
    User
}