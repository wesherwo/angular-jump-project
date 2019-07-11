let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = process.env.PORT || 3000;

const allClients = [];
const allLobbys = [];
const allLobbyNums = [];

io.on('connection', (socket) => {
  allClients.push(socket);
  let num = 0;
  socket.on('new-message', (message) => {
    io.to(num).emit('new-message', message);
  });
  socket.on('new-video', (message) => {
    io.to(num).emit('new-video', message);
  });
  socket.on('play-video', (message) => {
    io.to(num).emit('play-video', message);
  });
  socket.on('pause-video', (message) => {
    io.to(num).emit('pause-video', message);
  });

  socket.on('create-lobby', () => {
    num = Math.floor(Math.random() * 89999 + 10000);
    while (allLobbys.indexOf(num) != -1) {
      num = Math.floor(Math.random() * 89999 + 10000);
    }
    allLobbys.push(num);
    allLobbyNums.push(1);
    socket.join(num);
    socket.to(num).emit('joined-lobby', num);
  });
  socket.on('join-lobby', (message) => {
    num = Math.floor(Number(message));
    if (num < 10000 || num > 99999) {
      num = Math.floor(Math.random() * 89999 + 10000);
      while (allLobbys.indexOf(num) != -1) {
        num = Math.floor(Math.random() * 89999 + 10000);
      }
      allLobbys.push(num);
      allLobbyNums.push(0);
    }
    allLobbyNums[allLobbys.indexOf(num)]++;
    socket.join(num);
    socket.to(num).emit('joined-lobby', num);
  });
  socket.on('get-lobby', (message) => {
    io.to(num).emit('get-lobby', num);
  });

  socket.on('disconnect', () => {
    var i = allClients.indexOf(socket);
    allClients.splice(i, 1);
    i = allLobbys.indexOf(num);
    allLobbyNums[i]--;
    if (allLobbyNums[i] <= 0) {
      allLobbys.splice(i, 1);
      allLobbyNums.splice(i, 1);
    }
  });
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});