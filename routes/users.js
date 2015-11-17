var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var user_id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');  

	res.send(user_id + ': ' + token + ' ');
  	//res.send('respond with a resource');
});

module.exports = router;
