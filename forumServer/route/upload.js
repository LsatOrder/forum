const formidable = require('formidable')
const Path = require('path')
const upload = (req, res) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm();
    // 配置上传文件的存放位置
    form.uploadDir = Path.join(__dirname, '../', 'public', 'uploads');
    // 保留上传文件的后缀
    form.keepExtensions = true
    form.parse(req,(err , fields , files)=>{
        // 如果err不是空，则说明上传失败
        if (err) return res.status(200).send({data: err ,msg:'上传失败',status: 501})
        // 解析出相对路径
        let picUrl = files.file.path
        let url =  picUrl.split(Path.join(__dirname, '../'))
        const tmpPath = url[1]
        const path = files.file.path
        return res.status(200).send({data: {
            tmpPath,
            path
        } ,msg:'请求成功',status: 200})
    })

}

module.exports = upload