var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url);
});

/*server.get('/', restify.serveStatic({
 directory: __dirname,
 default: '/index.html'
}));*/

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: '88bafcfd-7f02-42a3-bdff-357c414e9442',
    appPassword: 'worDH8HuvD4Dgwh0H0H7m82'
});

// Listen for messages from users
server.post('/api/messages', connector.listen());



// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});
