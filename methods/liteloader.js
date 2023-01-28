//===============LITELOADER METHOD================
module.exports = {
    name: 'LiteLoader',
    async execute(proj,user,time,sign,conf){
        if(conf.LiteLoader.Command1 != null){
            console.log(time+" | Running command | "+conf.LiteLoader.Command1.replaceAll('$user',user))
            mc.runCmd(conf.LiteLoader.Command1.replaceAll('$user',user))
        }
        if(conf.LiteLoader.Command2 != null){
            console.log(time+" | Running command | "+conf.LiteLoader.Command2.replaceAll('$user',user))
            mc.runCmd(conf.LiteLoader.Command2.replaceAll('$user',user))
        }
        if(conf.LiteLoader.Command3 != null){
            console.log(time+" | Running command | "+conf.LiteLoader.Command3.replaceAll('$user',user))
            mc.runCmd(conf.LiteLoader.Command3.replaceAll('$user',user))
        }
    }
}