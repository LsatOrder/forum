// 用到的集合在这里导入
const { Draft } = require('../../connect/draft')

const saveToBeDraft = async (req,res)=>{
    const {title,author,detail,cover} = req.body
    Draft.create({
        title,author,detail,cover
    }).then(()=>{
       return res.status(200).send({data:'',msg:'存储为草稿成功',status: 200 })
    }).catch((err)=>{
       return res.status(200).send({data:'',msg:'存储为草稿失败',status: 200 })
    })
}
module.exports = saveToBeDraft