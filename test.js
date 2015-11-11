var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.use(express.static(__dirname + '/public'));
//var client = require('../js/jquery2.js');

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/public', 'game.html'));
});



io.on('connection', function(socket){
  socket.on('playerMoved', function(movement){
    socket.broadcast.emit('playerMoved', movement);
    //console.log('playerMoved: ' + movement.id);
  });
});

io.on('connection', function(socket){
  console.log('a user connected');
   socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});




http.listen(8000, function(){
  console.log('listening on *:8000');
});