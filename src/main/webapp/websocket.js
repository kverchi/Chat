var ws;

function connect() {
    var username = document.getElementById("username").value;

    var host = document.location.host;
    var pathname = document.location.pathname;

    //ws = new WebSocket("ws://" +host  + pathname + "chat/" + username);
    ws = new WebSocket("ws://diary-messenger.herokuapp.com/chat/" + username);
    ws.onmessage = function(event) {
        var log = document.getElementById("log");
        console.log("on message: " + event.data);
        var message = JSON.parse(event.data);
        log.innerHTML += message.from + " : " + message.content + "\n";
    };
}

function send() {
    var content = document.getElementById("msg").value;
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);
}