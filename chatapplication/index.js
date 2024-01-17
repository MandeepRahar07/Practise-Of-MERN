const express = require("express");
const http = require('http');
const path  = require('path')
const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
    io.emit('message', msg);
    });
  });


app.use(express.static(path.resolve('./public')));



app.get('/',(req,res)=>{
    return res.sendFile("./public/index.html")
})

//we need to create socket to we cant create directly listen server

server.listen(9000,()=> console.log(`server stated 9000`));



