//创建连接池
const mysql=require('mysql');
var pool=mysql.createPool({
    host:'127.0.0.1',
    port:'3306', // 数据库端口号
    user:'root', // 数据库用户名
    password:'root', // 数据库密码
    database:'mydatabase', // 数据库名称
    connectionLimit:20 // 最大连接活跃数
});
module.exports=pool;
