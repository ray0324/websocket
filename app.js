const Websocket = require('./lib/websocket');
const net = require('net');
const http =  require('http');

// const clientList = new clientList;
const PORT = 4000;

const server = net.createServer();
// const httpServer = http.createServer();

const ws = new Websocket;

server.on('connection',socket => {

  
  ws.once('message', function (msg) {
    socket.write(msg);
  });

  ws.setSocket(socket);
  // httpServer.on('connection', function (req, res) {
  //   ws.once('message',function(msg){
  //     res.end(msg);
  //   });
  //   ws.send(req);
  // });
});

// httpServer.listen(5000, function () {
//   console.log('http server start at 5000');
// })

server.listen(PORT, function () {
  console.log('websocket server run port ' + PORT);
});
