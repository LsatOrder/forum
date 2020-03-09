// 用到了Aside集合 按需导入
const { Comment } = require('../../connect/comment')
const { Reply } = require('../../connect/reply')

const getCommentByActicleID = async (req,res)=>{
    const comarticle = req.body._id
    
    let data = await Comment.find({comarticle}).sort('-commentDateNum').populate({ path: 'comuser', select: 'username level info' })
    for (let i = 0 ; i<data.length; i++) {
        const reply = await Reply.find({replycomment:data[i]._id}).sort('replyDateNum')
                                .populate({ path: 'replyuser', select: 'username level info' })
                                .populate({ path: 'replyto', select: 'username level info' })
        data[i].children = reply
    }
    // 返回数据
    return res.status(200).send({data: data,msg:'请求成功',status: 200 })
}
module.exports = getCommentByActicleID