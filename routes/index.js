var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.sendfile(__dirname + '/../index.html');
  res.render('index', { title: 'IoT hub' });
});

module.exports = router;
