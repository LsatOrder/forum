const email = require('../../email/email')
const {verificationCode:code} = require('../../connect/verificationCode')
// 创建一个邮件对象

const sendEmail = async (req,res) => {
    // 生成验证码
    const dd = Math.random().toString(14).substr(2)
    // 验证码存入数据库
    const data = await code.create({code:dd})
    const delID = data._id
    // 10分钟后删除此次生成的验证码
    setTimeout(async()=>{
       const aa = await code.findByIdAndDelete({_id:delID})
    },60*10*1000)
    // 生成邮件内容
    let context = {
        // 发件人
        from: 'misaka_20001@126.com',
        // 主题
        subject: '验证码',
        // 收件人
        to: req.body.email,
        // 邮件内容，HTML格式
        text: `        您注册所需的验证码为： ${dd}
        有效期为10分钟，请及时完成注册！ `//接收激活请求的链接
    };
    // 发送邮件
    email(context)
    // 返回给客户端验证码的id
    return res.status(200).send({data,msg:'请求成功',status: 200 })
}

module.exports = sendEmail
