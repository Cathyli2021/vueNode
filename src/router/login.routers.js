// 引入express模块
const express = require('express');
// 创建一个空的路由对象
const router = express.Router();
// 引入连接池模块
// const pool = require('./pool');

// 原调取数据库的写法
// var name=req.body.name;
// // console.log(name);
// var pwd=req.body.pwd;
// // console.log(pwd);
// if(!name){
//     res.send("您输入的用户名不存在");
//     return;
// }
// if(!pwd){
//     res.send("您输入的密码不存在");
//     return;
// }
// pool.query('select * from user where  name=? and pwd=?',[name,pwd],(err,result)=>{
//     if(err) throw err;
//      console.log(result);
//      console.log(result.length);

//      if(result.length>0){
//         res.send({status:1,rel:result,msg:'登录成功'});
//     }else{
//       res.send({status:0,msg:"用户名或密码不正确"});
//     }
//  })   

// 木有数据库，自己配置写死的数据昂
//post请求是req.body，get请求是req.query
router.post('/', (req, res) => {
    var name = req.body.name;
    var pwd = req.body.pwd;
    if (name !== 'admin') {
        res.send("您输入的用户名不存在");
        return;
    }
    if (pwd !== '123456') {
        res.send("您输入的密码不正确");
        return;
    }
    var response = { code: 200, status: 1, data: '', message: "登录成功" };
    res.send(JSON.stringify(response));
})
module.exports = router;
