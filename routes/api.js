var express = require('express');
var router = express.Router();

//read event host 
var fs = require('fs');
var eventApiUrl = "";
fs.readFile('public/eventsApi.config', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  eventApiUrl = data;
  console.log(data);
});

// library to handle requests
var request = require('request');

var output = "working?";
/* GET users listing. */
router.get('/event', function(req, res, next) {
	var user_id = req.param('user_id');
	var event_id = req.param('event_id');
	var event_param = req.param('event_param');
	console.log('event controller..');

	request({
	    url: eventApiUrl, //'http://localhost:3000/testEvent', //URL to hit
	    //qs: {from: 'event api', time: +new Date()}, //Query string data
	    method: 'POST',
	    //Lets post the following key/values as form
	    json: {
	        user_id: user_id,
	        event_id: event_id,
	        event_param: event_param
	    }
	}, function(error, response, body){
	    if(error) {
	        console.log(error);
	    } else {
	    	output = body;
	        console.log(response.statusCode, body);
	}
	});
	res.send(user_id + ': ' + event_param + ' ' + ":: " + output);
  	//res.send('respond with a resource');
});


module.exports = router;
