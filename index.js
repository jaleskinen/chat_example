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
    res.sendfile('./view/index.html');
});

//Make chat_scripts.js router to return chat_scripts.js
express.get('/chat_scripts.js', function (req, res) {
    res.sendfile('./lib/chat_scripts.js');
});

//Make jquery-2.1.4.min.js router to return jquery-2.1.4.min.js
express.get('/jquery-2.1.4.min.js', function (req, res) {
    res.sendfile('./lib/jquery-2.1.4.min.js');
});

//Make jquery-2.1.4.min.js router to return jquery-2.1.4.min.js
express.get('/bootstrap.min.js', function (req, res) {
    res.sendfile('./lib/bootstrap.min.js');
});

//Make styles.css router to return styles.css
express.get('/styles.css', function (req, res) {
    res.sendfile('./css/styles.css');
});

//Make styles.css router to return styles.css
express.get('/bootstrap.min.css', function (req, res) {
    res.sendfile('./css/bootstrap.min.css');
});

http.listen(3000, function () {
    console.log('listening on *:3000');
});