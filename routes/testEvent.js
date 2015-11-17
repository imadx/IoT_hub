var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('testEvent is directed properly...');
});
router.post('/', function(req, res, next) {
	var user_id = req.body.user_id;
	var event_id = req.body.event_id;
	var event_param = req.body.event_param; 

	console.log("--------------"  + user_id + "   " + event_id + "  " + event_param);

	res.send(user_id + '_' + event_id + '_' + event_param + ' from testEvent');
  	//res.send('respond with a resource');
});

module.exports = router;
