var express = require('express');
var router = express.Router();
router.get('/getInfo', function (req, res) {
	var user = {
		name: '李四',
		age: 30,
		sex: 'woman',
	};
	var response = { status: 1, data: user };
	res.send(JSON.stringify(response));
});

module.exports = rouçter;
