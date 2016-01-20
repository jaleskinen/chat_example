window.onload = function (event) {
    //Connect to server with socket
    var socket = io();
    
    //Listen "new message" from server
    socket.on('new message', function (data) {
        //Get textarea with id="messages"
        var textArea = document.getElementById('messages');
        textArea.value += data.name + ": " + data.message + "\n";
    });
    
    //Get object that has id="send"
    var btnSend = document.getElementById('send');
    //Add click listener for it
    btnSend.onclick = function () {
        
        var msg = document.getElementById('chat_message');
        console.log(msg.value);
        var dataToServer = {
            name: 'undefined',
            message: msg.value
        };
        
        //send message to server
        socket.emit('chat msg', dataToServer);
    };
};