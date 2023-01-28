//===============MYSQL METHOD================
module.exports = {
    name: 'mysql',
    async execute(proj,user,time,sign,conf){
        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host: conf.MySQL.IP,
            user: conf.MySQL.Username,
            password: conf.MySQL.Password,
            database: conf.MySQL.Database
        })
        connection.connect()
        connection.query(conf.MySQL.SQL_Query.replaceAll('$user',user), function (error, results, fields){
            if (error) throw error
            console.log(time+" | Edit DB | Success!")
        })
        connection.end()
    }
}