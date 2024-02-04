// 引入express模块
const express=require("express");

// 引入bodyParser模块
const bodyParser=require("body-parser");

// 创建web服务器
var server=express();
server.listen(3001);

// 托管静态资源到public
server.use(express.static('public'));

// 配置post请求第三方中间件
server.use(bodyParser.urlencoded({ extended:false })) //formData格式解析
server.use(bodyParser.json()) //json解析


// 引入路由模块
const login=require("./src/router/login.routers");//用户登录
const user = require("./src/router/user.routers")
server.use('/login',login);//用户登录
server.use('/user',user);//用户信息

server.listen(82, () => {
    console.log('服务器启动:'+'http://127.0.0.1')
  })

  // 采用设置所有均可访问的方法解决跨域问题
server.all('*', function(req, res, next) {
    // 设置允许跨域的域名，*代表允许任意域名跨域
    res.header('Access-Control-Allow-Origin', '*');
    // 允许的header类型
    res.header('Access-Control-Allow-Headers', 'content-type');
    // 跨域允许的请求方式
    res.header('Access-Control-Allow-Methods', 'DELETE,PUT,POST,GET,OPTIONS');
    if (req.method.toLowerCase() === 'options') {
      res.send(200); // 让options尝试请求快速结束
    } else {
      next();
    }
  });
  