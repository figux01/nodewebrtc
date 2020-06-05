$(document).ready(function(){
    window.WebSocket = window.WebSocket || window.MozWebSocket;

    var connection = new WebSocket('ws://3.15.227.87:8080');

    connection.onopen = function () {
        // connection is opened and ready to use
        console.log("connection is opened and ready to use");

        connection.send("text");
    };

    connection.onerror = function (error) {
        // an error occurred when sending/receiving data
        console.log("an error occurred when sending/receiving data");
    };

    connection.onmessage = function (message) {
        // try to decode json (I assume that each message
        // from server is json)
        console.log(message);
        try {
            var json = JSON.parse(message.data);
        } catch (e) {
        console.log('This doesn\'t look like a valid JSON: ',
            message.data);
        return;
        }
        // handle incoming message
    };

});