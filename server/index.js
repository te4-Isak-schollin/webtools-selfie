var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/remote', function (req, res) {
    res.sendFile(__dirname + '/remote.html');
});


io.on('connection', function (socket) {
    socket.on('spin', (data) => {
        console.log('får saken')
        console.log(data)
        io.emit('select', data)
    })
//     socket.on('hello', function (data) {
//         console.log(data)
//         // socket.leaveAll()
//         socket.join(data.room)
//         // io.to(data.room).emit('msg', { msg: `hello from the room ${data.room}`});

//     })
//     socket.on('msg', function (data) {
//         console.log(Object.keys(socket.rooms).find((room) => room == data.room))

//         if (Object.keys(socket.rooms).find((room) => room == data.room)) {
//             io.to(data.room).emit('msg', { msg: `hello from the room ${data.room}` });
//         }
//         else {
//             socket.emit('msg', {msg: 'du är inte i det rummet'})
//         }
//     })


})

http.listen(3000, function () {
    console.log('listening on *:3000');
});