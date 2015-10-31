var PubSub = require('./app');


var app = new PubSub();
app.on('hello','client1', function(event, args){
	console.log('got message');
	console.log(arguments);

});


app.emit('hello', {first: 'world'});

