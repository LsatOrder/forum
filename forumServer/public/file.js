// 内置路径模块
const Path = require('path')
const uploadsFile = (req ,res ) => {
    // 在public下查找文件
    const path = Path.join(__dirname, req.path)
    // 返回文件
    return res.status(200).sendFile(path)
}
module.exports = uploadsFile