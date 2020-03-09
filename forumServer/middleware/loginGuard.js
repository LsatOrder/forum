const guard = (req,res,next)=>{
    if(req.url != '/login' && !req.session.username){
        // todo: 重定向页面
    }else{
        next()
    }
}

module.exports = guard