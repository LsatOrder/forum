const mongoose = require('mongoose')
// 创建用户集合规则
const loginNote = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    logintime:{
        type: String
    },
    dataID: {
        type: Number
    }
})

// 创建集合
const loginNotes = mongoose.model('LoginNote',loginNote)

module.exports = {
    loginNotes
}