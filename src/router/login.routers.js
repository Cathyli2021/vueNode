// 引入express模块
const express=require('express');
// 创建一个空的路由对象
const router=express.Router();
// 引入连接池模块
const pool=require('./pool');
//post请求是req.body，get请求是req.query
 router.post('/',(req,res)=>{
    var name=req.body.name;
    // console.log(name);
    var pwd=req.body.pwd;
    // console.log(pwd);
    if(!name){
        res.send("您输入的用户名不存在");
        return;
    }
    if(!pwd){
        res.send("您输入的密码不存在");
        return;
    }
    pool.query('select * from user where  name=? and pwd=?',[name,pwd],(err,result)=>{
        if(err) throw err;
         console.log(result);
         console.log(result.length);

         if(result.length>0){
            res.send({status:1,rel:result,msg:'登录成功'});
        }else{
          res.send({status:0,msg:"用户名或密码不正确"});
        }
     })       
 })
 module.exports=router;
