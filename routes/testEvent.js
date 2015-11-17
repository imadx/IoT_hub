var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
	var id = req.param('id');
	var event_id = req.param('event_id');
	var event_param = req.param('event_param');  

	console

	res.send(id + '_' + event_id + '_' + event_param + ' from testEvent');
  	//res.send('respond with a resource');
});

module.exports = router;
