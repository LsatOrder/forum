const {User} = require('../../connect/user')
const closeNoSeaking = async(req,res) => {
    const _id = req.body._id
    const sb = await User.updateOne({_id},{noSpeaking: ''})
    return res.status(200).send({data: 'ok' ,msg:'解除禁言成功',status: 200})
 }
module.exports = closeNoSeaking


