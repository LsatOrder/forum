const {User} = require('../../connect/user')
const fs = require('fs')
const path = require('path')
const noSpeaking = async(req,res) => {
    const _id = req.body._id
    let time = Number(req.body.timer)
    let DD = req.body.Date
    let data = await User.updateOne({_id},{noSpeaking:time}).select('-role -state -token')
    req.body[_id] = setInterval(async()=>{
        time-=60000
        fs.writeFileSync(path.join(__dirname, '../../', 'public' , 'timer' , _id + '.txt' ), (_id + ' 剩余禁言时长:' + time))
        if (time <= 0 ) {
            clearInterval(req.body[_id])
            const sb = await User.updateOne({_id},{noSpeaking: ''})
            fs.unlink(path.join(__dirname, '../../', 'public' , 'timer' , _id + '.txt' ), function(err){
                if(err){
                     throw err;
                }
                console.log('文件:'+_id+'删除成功！');
           })
        }
    },60000)
    return res.status(200).send({data: 'ok' ,msg:'设置禁言成功',status: 200})
 }
module.exports = noSpeaking


