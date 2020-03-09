// 内置路径模块
const Path = require('path')
const tia = (req ,res ) => {
    console.log(req.path);

    // 拼接路径
    const path = Path.join(__dirname, '/tia', req.path)
    // 返回图片
    return res.status(200).sendFile(path)
}
module.exports = tia