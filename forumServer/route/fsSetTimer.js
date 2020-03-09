const fs = require('fs')
const path = require('path')
const {User} = require('../connect/user')
let filePath = path.resolve('./public/timer');

const fsSetTimer = (req,res) => {
    let body = {}
    //调用文件遍历方法
    fileDisplay(filePath);
    //文件遍历方法
    function fileDisplay(filePath){
        //根据文件路径读取文件，返回文件列表
        fs.readdir(filePath,function(err,files){
            if(err){
                console.warn(err)
            }else{
                //遍历读取到的文件列表
                files.forEach(function(filename){
                    //获取当前文件的绝对路径
                    let filedir = path.join(filePath, filename);
                    //根据文件路径获取文件信息，返回一个fs.Stats对象
                    fs.stat(filedir,function(eror, stats){
                        if(eror){
                            console.warn('获取文件stats失败');
                        }else{
                            let isFile = stats.isFile();//是文件
                            let isDir = stats.isDirectory();//是文件夹
                            if(isFile){
                                console.log(filedir);
    　　　　　　　　　　　　　　　 // 读取文件内容
                                let content = fs.readFileSync(filedir, 'utf-8');
                                console.log(content);
                                let _id = content.substring(0,24);
                                let time =Number(content.substring(32))
                                console.log(time);
                                
                                fs.unlink(filedir, function(err){
                                    if(err){
                                         throw err;
                                    }
                                    console.log('文件:'+filedir+'删除成功！');
                                })
                                body[_id] = setInterval(async()=>{
                                    time-=60000
                                    fs.writeFileSync(path.join(__dirname, '../', 'public' , 'timer' , _id + '.txt' ), (_id + ' 剩余禁言时长:' + time))
                                    if (time <= 0 ) {
                                        clearInterval(body[_id])
                                        const sb = await User.updateOne({_id},{noSpeaking: ''})
                                        fs.unlink(path.join(__dirname, '../', 'public' , 'timer' , _id + '.txt' ), function(err){
                                            if(err){
                                                 throw err;
                                            }
                                            console.log('文件:'+_id+'删除成功！');
                                       })
                                    }
                                },60000)
                            }
                            if(isDir){
                                fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
                            }
                        }
                    })
                });
            }
        });
    }
}
module.exports = fsSetTimer
