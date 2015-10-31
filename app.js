// entities
/*
clients
listeners
rooms
events:
server: instance that is running this stuff. Also saves listener structure

event types:
* direct: events client emit directly
* indirect: events that are emitted from other events
*/


// stack of unprocessed events
var eventStack = [];
/*
[{
	name: 'event1',
	args: {}
}]
*/


// stack of registered listeners
var listeners = {};
/*
{
	event1: {
		client1: {}
		client2: {}
	}
}
 */


module.exports = function(cfg){

	// takes event off of event stack and sends it to the clients who are listening to it
	var processStack = function(){
		var event = eventStack.pop();
		var clients = listeners[event.name];
		for(var clientId in clients){
			var client = clients[clientId];
			client(event.name, event.args);
		}
	};

	// add event to the event stack
	this.emit = function(event, args){
		eventStack.unshift({
			name: event,
			args: args
		});
		processStack();
	};

	// register listener
	this.on = function(eventName, client, cb){
		if(!listeners[eventName]) listeners[eventName]={};
		if(!listeners[eventName][client]) listeners[eventName][client]={};
		listeners[eventName][client] = cb;
	};

	// unregister listener
	this.removeListener = function (event, client){
		delete listeners[event][client];
	};


};