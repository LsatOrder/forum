let log4js = require('log4js')
let path = require('path')
let fs = require('fs')
let basePath = path.resolve(__dirname,'../logs')

let errorPath = basePath+'/errors/'
let resPath = basePath+'/responses/'

let errorFilename = errorPath+'/error'
let resFilename = resPath+'/response'

/**
 * 确定目录是否存在，如果不存在则创建目录
 */
let confirmPath = function(pathStr) {
    if(!fs.existsSync(pathStr)){
        fs.mkdirSync(pathStr);
        console.log('createPath: ' + pathStr);
    }
}



log4js.configure({

    appenders: {

        ruleConsole: {type: 'console'},

        ruleFile: {

            type: 'dateFile',

            filename: 'logs/server-',

            pattern: 'yyyy-MM-dd.log',

            maxLogSize: 10 * 1000 * 1000,

            numBackups: 3,

            alwaysIncludePattern: true

        }

    },

    categories: {

        default: {appenders: ['ruleConsole', 'ruleFile'], level: 'info'}

    }

});

//创建log的根目录'logs'
if(basePath){
    confirmPath(basePath)
    //根据不同的logType创建不同的文件目录
    confirmPath(errorPath)
    confirmPath(resPath)
}

module.exports = log4js