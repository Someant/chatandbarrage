/**
 * Created by john on 2015/11/24.
 */


var app=require('express')();
var server=require('http').Server(app);
var io=require('socket.io')(server);

var express = require('express');

server.listen(3000);


app.get('/', function (request, response) {
    response.sendFile(__dirname+'/index.html');
});


app.get('/barrage', function(resquest, response){

    response.sendFile(__dirname+'/barrage.html');

});

app.use(express.static(__dirname + '/public'));

io.on('connection', function (socket) {

    socket.on('chat.message',function(data){

        console.log(data);
        io.emit('chat.message',data);

    });

    socket.on('barrage.message',function(data){

        console.log(data);
        io.emit('barrage.message',data);

    });



});