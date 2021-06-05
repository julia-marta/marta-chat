const express = require(`express`);
const path = require('path');
const http = require(`http`);
const {Server} = require(`socket.io`);

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

const io = new Server(server, {
    cors: {
      origin: '*'
    }
  });

const Socket = {};

io.on(`connection`, (socket) => {
    const {address: ip} = socket.handshake;
    console.log(`New client connected: ${ip}`);
    io.send(io.of("/").sockets.size);

    socket.on(`name`, (clientName) => {
      Socket[ip] = clientName;
      io.emit(`name`, clientName);
    });

    socket.on(`msg`, (message) => {
      io.emit(`msg`, message);
    });

    socket.on(`smile`, (smile) => {
      io.emit(`smile`, smile);
    });

    socket.on(`disconnect`, () => {
      console.log(`Client disconnected: ${ip}`);
      io.send(io.of("/").sockets.size);

      if (Socket[ip]) {
        io.emit(`leave`, Socket[ip]);
      }
    });
});

server.listen(port, (err) => {
    if (err) {
      console.error(`An error occured on server creation: ${err.message}`);
      process.exit(1);
    }
    return console.info(`Listening to connections on ${port}`);
  });
