/**
 * Created by john on 2015/11/24.
 */


var app=require('express')();
var server=require('http').Server(app);
var io=require('socket.io')(server);

server.listen(3000);


app.get('/', function (request, response) {
    response.sendFile(__dirname+'/index.html');
});

io.on('connection', function (socket) {

    socket.on('chat.message',function(data){

        console.log(data);
        io.emit('chat.message',data);

    })


});