const express = require(`express`);
// const {Router} = require(`express`);
const path = require('path');
const http = require(`http`);
const {Server} = require(`socket.io`);
const db = require('./models/index.js');

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.post('/message', async (req, res) => {
  const {user, message} = req.body;

    const newMessage = await db.Message.create({user, message});
    return res.status(200).json(newMessage);
});

app.delete(`/messages/:id`, async (req, res) => {
  const {id} = req.params;

  await db.Message.destroy({where: {id}});

  return res.status(200).send(`Message ${id} was deleted`);
});

app.get(`/messages`, async (req, res) => {

  const messages = await db.Message.findAll();

  return res.status(200).json(messages);
});

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

io.on(`connection`, (socket) => {
    const {address: ip} = socket.handshake;
    console.log(`New client connected: ${ip}`);
    io.send(io.of("/").sockets.size);

    socket.on(`name`, (clientName) => {
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
    });
});

server.listen(port, (err) => {
    if (err) {
      console.error(`An error occured on server creation: ${err.message}`);
      process.exit(1);
    }
    return console.info(`Listening to connections on ${port}`);
  });
