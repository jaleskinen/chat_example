var express = require('express')();
var http = require('http').Server(express);

//Create server socket
var io = require('socket.io')(http);

//Listen "connection" message from client socket
io.on('connection', function (socket) {
    console.log('Connected');
    //Listen "chat msg" messag from ANY client
    socket.on('chat msg', function (data) {
        console.log('chat msg reveived');
        io.emit('new message', data); 
    });
});

//Make root context router to return index.html
express.get('/', function (req, res) {
    res.sendfile('index.html');
});

//Make chat_scripts.js router to return chat_scripts.js
express.get('/chat_scripts.js', function (req, res) {
    res.sendfile('chat_scripts.js');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});