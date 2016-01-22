window.onload = function (event) {
    //Connect to server with socket
    var socket = io();
    
    var myDiv = document.getElementById('messages');

    
    //Listen "new message" from server
    socket.on('new message', function (data) {
        //Get textarea with id="messages"
        var textArea = document.getElementById('messages');
        textArea.value += data.name + ": " + data.message + "\n";
        myDiv.scrollTop = (myDiv.scrollHeight);

    });
    
    var chatName = prompt("Please enter your name");

    //Get object that has id="send"
/*    var btnSend = document.getElementById('send');
    //Add click listener for it
    btnSend.onclick = function () {*/
    if (chatName === "" || chatName === undefined || chatName === null) {
        alert('Chat name required!');
    } else {
        $('#chatmessage').submit(function () {

            var msg = document.getElementById('chat_message');
            console.log('message:' + msg.value);
            var dataToServer = {
                name: chatName,
                message: msg.value
            };

            //send message to server
            socket.emit('chat msg', dataToServer);
            $('#chat_message').val('');
            return false;
        });
    }
};