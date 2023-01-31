const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const {Server} = require('socket.io');
const io = new Server(server)

app.get("/", (req, res) =>{
    res.send(__dirname +'/templates/' )
});

io.on ('conection', (socket) =>{
    console.log("Un usuario se a conectado al chat")


socket.on('chat message', (msg) => {
   io.emit('chat message',msg);
});

    socket.on('disconect',() =>{
        console.log("el usuario se a desconectado");
    });
})

server.listen(8080,() =>{
    console.log("escuchando puerto 8080");
});
