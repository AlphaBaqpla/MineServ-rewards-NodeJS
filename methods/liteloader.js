//===============LITELOADER METHOD================
module.exports = {
    name: 'rcon',
    async execute(proj,user,time,sign,conf){
        mc.runCmd(conf.LiteLoader.Command.replaceAll('$user',user))
    }
}