const { User } = require('../../connect/user')

const getSexBiliData = async (req,res)=>{
    // 查询数据库中的数据
    let Aquarius = await User.countDocuments({ "info.constellation" : '水瓶座' })
    let Pisces = await User.countDocuments({ "info.constellation" : '双鱼座' })
    let Aries = await User.countDocuments({ "info.constellation" : '白羊座' })
    let Taurus = await User.countDocuments({ "info.constellation" : '金牛座' })
    let Gemini = await User.countDocuments({ "info.constellation" : '双子座' })
    let Cancer = await User.countDocuments({ "info.constellation" : '巨蟹座' })
    let Leo = await User.countDocuments({ "info.constellation" : '狮子座' })
    let Virgo = await User.countDocuments({ "info.constellation" : '处女座' })
    let Libra = await User.countDocuments({ "info.constellation" : '天秤座' })
    let Scorpio = await User.countDocuments({ "info.constellation" : '天蝎座' })
    let Sagittarius = await User.countDocuments({ "info.constellation" : '射手座' })
    let Capricornus = await User.countDocuments({ "info.constellation" : '摩羯座' })
    return res.status(200).send({data:{
        Aquarius,
        Pisces,
        Aries,
        Taurus,
        Gemini,
        Cancer,
        Leo,
        Virgo,
        Libra,
        Scorpio,
        Sagittarius,
        Capricornus
    } ,msg:'请求成功',status: 200})
}
module.exports = getSexBiliData