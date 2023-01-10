const config = require('./config.json')
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
    if(config.Method == 'RCon'){}
    else if(config.Method == 'MySQL'){}
    else if(config.Method == 'LiteLoader'){}
    else if(config.Method == 'Custom'){}
}