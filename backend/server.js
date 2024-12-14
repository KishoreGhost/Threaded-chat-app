const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const initializeSocket = require('./socket');

dotenv.config();

const app = express();
app.use(express.json());
const server = http.createServer(app);
initializeSocket(server);

app.get('/', (req, res) => {
  res.send('Chat App Backend Initialized!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.listen(PORT, () => {
  console.log(`Server with Socket.IO is running on port ${PORT}`);
});
