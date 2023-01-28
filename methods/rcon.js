//===============RCON METHOD================
module.exports = {
    name: 'rcon',
    execute(proj,user,time,sign,conf){
        const Rcon = require('rcon')
        const o = {tcp:true,challenge:false}
        const conn = new Rcon(conf.RCon.IP, conf.RCon.Port, conf.RCon.Password, o)
        conn.on('auth', function(){
            console.log("Authenticated")
            if(conf.Rcon.Command1 !== "null"){
                console.log(time+" | Running command | "+conf.RCon.Command1.replaceAll('$user',user))
                conn.send(conf.RCon.Command1.replaceAll('$user',user))
            }
            if(conf.Rcon.Command2 !== "null"){
                console.log(time+" | Running command | "+conf.RCon.Command2.replaceAll('$user',user))
                conn.send(conf.RCon.Command2.replaceAll('$user',user))
            }
            if(conf.Rcon.Command3 !== "null"){
                console.log(time+" | Running command | "+conf.RCon.Command3.replaceAll('$user',user))
                conn.send(conf.RCon.Command3.replaceAll('$user',user))
            }
        }).on('response', function(str){
            console.log("Response: " + str)
            conn.disconnect()
        }).on('error', function(err){
            console.log("Error: " + err)
        }).on('end', function(){
            console.log("Connection closed")
        })
        conn.connect()
    }
}
