// holds all the app logic

var PubSub = require('./app');

var chatApp = new PubSub({
	addEvent: function(event){},
	popEvent: function(){},
	addListener: function(listener){},
	removeListener: function(listener){},
	receiveEvent: function(){},
	emitEvent: function(event, client){},
	listeners: {
		beforeroomcreate: function(){},

		beforeroomupdate: function(){},

		beforeroomdelete: function(){},

		// used for client authentication
		beforeclientlogin: function(){},

		// logic that can prevent a client from logging out
		beforeclientlogout: function(){},

		beforeregisterlistener: function(event,fromClient,room,args){},

		beforemessageemit: function(event,fromClient,room,args){},

		beforemessagereceive: function(){}
	}
});

