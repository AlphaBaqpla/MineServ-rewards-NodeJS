const config = require('./config.json')
const fs = require('fs')
const server = require('http')
const { parse } = require('querystring')
var SHA256 = require("crypto-js/sha256")

server.createServer((req,res)=>{
    let buf = ''
    req.on("data",(c)=>{
        buf += c.toString()
    })
    req.on("end",()=>{
        var map = parse(buf)
        if(checkSign(map.project,map.username,map.timestamp,map.signature)==true){
            main(map.project,map.username,map.timestamp,map.signature)
            res.end('done')
        }
        else{
            res.statusCode = 500
            res.end('error')
        }
    })
}).listen(config.WebServerPort)
function checkSign(project,username,timestamp,signature){
    var hash = SHA256(project+'.'+config.SecretKey+'.'+timestamp+'.'+username)
    if(hash == signature){
        return true
    }
    else{
        return false
    }
}

function main(proj,user,time,sign){
    if(config.Method == 'RCon'){
        const method = require('./methods/rcon.js')
        method.execute(proj,user,time,sign,config)
    }
    else if(config.Method == 'MySQL'){
        const method = require('./methods/mysql.js')
        method.execute(proj,user,time,sign,config)
    }
    else if(config.Method == 'LiteLoader'){
        const method = require('./methods/liteloader.js')
        method.execute(proj,user,time,sign,config)
    }
    else if(config.Method == 'Custom'){
        const method = require('./methods/custom.js')
        method.execute(proj,user,time,sign,config)
    }
}