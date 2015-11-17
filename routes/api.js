var express = require('express');
var router = express.Router();


// library to handle requests
var request = require('request');

var output = "";
/* GET users listing. */
router.get('/event', function(req, res, next) {
	var user_id = req.param('user_id');
	var event_id = req.param('event_id');
	var event_param = req.param('event_param');
	console.log('event controller..');
	request.post(
	    'http://localhost:3000/testEvent',
	    {
	    	id: user_id,
	    	event_id: event_id,
	    	event_param: event_param
	     },
	    function (error, response, body) {
	        if (!error && response.statusCode == 200) {
	            console.log(body)
	            output = body;
	        }
	    }
	);
	res.send(user_id + ': ' + event_param + ' ' + ":: " + output);
  	//res.send('respond with a resource');
});


module.exports = router;
