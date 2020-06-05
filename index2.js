var evtSource = new EventSource("http://3.15.227.87:3000/events");
evtSource.onmessage = function(e) {
    console.log(e);
}