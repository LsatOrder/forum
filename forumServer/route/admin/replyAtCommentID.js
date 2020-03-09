// 用到的集合在这里导入
const { Reply } = require('../../connect/reply')

const replyAtCommentID = async (req,res)=>{
    const { replycomment, replyto, replyuser, reply, replyDateNum, replyDate } = req.body
    Reply.create({
        replycomment, replyto, replyuser, reply, replyDateNum, replyDate
    }).then(async (a)=>{
        const resData = await Reply.find({_id:a._id}).populate({ path: 'replyuser', select: 'username level info' })
                                     .populate({ path: 'replyto', select: 'username level info' })
       return res.status(200).send({data:resData,msg:'回复成功',status: 200 })
    }).catch((err)=>{
        console.log(err);
       return res.status(200).send({data:'',msg:'回复失败',status: 200 })
    })
}
module.exports = replyAtCommentID