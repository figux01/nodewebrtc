/*var evtSource = new EventSource("e-liveteaching.com/webrtc/index.php");
evtSource.onmessage = function(e) {
    var newElement = document.createElement("li");

    newElement.innerHTML = "message: " + e.data;
    eventList.appendChild(newElement);
}
evtSource.addEventListener("ping", function(e) {
    var newElement = document.createElement("li");

    var obj = JSON.parse(e.data);
    newElement.innerHTML = "ping at " + obj.time;
    eventList.appendChild(newElement);
}, false);*/