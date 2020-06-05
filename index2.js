var evtSource = new EventSource("http://localhost:3000/events");
evtSource.onmessage = function(e) {
    console.log(e);
}