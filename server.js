const WebSocket = require('ws');
var http = require('http');

const wss = new WebSocket.Server({
    port: 8081,
    host: '127.0.0.1',
    perMessageDeflate: {
      zlibDeflateOptions: {
        // See zlib defaults.
        chunkSize: 1024,
        memLevel: 7,
        level: 3
      },
      zlibInflateOptions: {
        chunkSize: 10 * 1024
      },
      // Other options settable:
      clientNoContextTakeover: true, // Defaults to negotiated value.
      serverNoContextTakeover: true, // Defaults to negotiated value.
      serverMaxWindowBits: 10, // Defaults to negotiated value.
      // Below options specified as default values.
      concurrencyLimit: 10, // Limits zlib concurrency for perf.
      threshold: 1024 // Size (in bytes) below which messages
      // should not be compressed.
    }
  });
wss.on('connection',function(ws, req){
    console.log('started client interval');

    console.log

    ws.on('close', function() {
        console.log('stopping client interval');
        //clearInterval(id);
    });


    setTimeout(function(){
        ws.send("datafromServeur");
    },10000)

    ws.on('message', function(data){
        //{'type':'offer','action':'AskclientTopatient or AskpatientToClient','sdp':''}
        console.log(data);
        //var dataJson  = JSON.parse(data);
        ws.send(data);

    });
});


var server = http.createServer(function(request, response) {
    
  });
server.listen(8081, function() {
    console.log("serveur created");
 });