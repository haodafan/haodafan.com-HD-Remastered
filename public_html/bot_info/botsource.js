var TelegramBot = require('node-telegram-bot-api');
var express = require('express');
var app = express();
require('express-ws')(app);

var connection = {};

var token = 'hidden to protect the integrity of my bot';
var bot = new TelegramBot(token, {polling: true});

app.get('/', function (request, response) {
    response.writeHead(302, {
        'Location': 'buy-ross.com'
    });
    response.end();
});

app.ws('/', function (ws, req) {
    console.log("Config connected");

    connection = {
        ws: ws
    };

    ws.on('open', function (msg) {
        console.log("Hi");
    });

    ws.on('message', function (msg) {
        var object = JSON.parse(msg);
        console.log("Got message ");
        bot.sendMessage(object.id, "[" + object.name + "] " + object.message);
        connection.ws.send(JSON.stringify({
            status: 200
        }));
    });

    ws.on('close', function () {
        connection = undefined;
    });

    ws.on('error', function () {
        connection = undefined;
    });
});

app.listen(8080);
console.log("Liveconfig is listening on port 8080");