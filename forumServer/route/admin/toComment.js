// 用到的集合在这里导入
const { Comment } = require('../../connect/comment')

const toComment = async (req,res)=>{
    // 解构数据
    const { comarticle, comuser, comment, commentDateNum, commentDate } = req.body
    // 生成评论
    Comment.create({
        comarticle, comuser, comment, commentDateNum, commentDate
    }).then(()=>{
        return res.status(200).send({data: '' ,msg:'评论成功',status: 200})
        }).catch((err)=>{
            console.log(err);
            
        return res.status(200).send({data: '' ,msg:'评论失败请重试',status: 200})
        })
    
}
module.exports = toComment