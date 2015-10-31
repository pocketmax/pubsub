var ChatApp = {};

var app = new ChatApp.Client({
	name: 'john.doe',
	clientId: '3234234',
	listeners: {            // add listeners on init
		usermessage: function(a, b, c){

		},
		userlogin: function(user){

		},
		userlogout: function(user){

		}
	}
});

app.listeners({
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

});

chatApp.emit({
	name: 'NEWMESSAGE',
	room: '/arizona/scottsdale/development/',
	tags: ['PHP','CSS'],
	args: {
		msg: 'my bla'
	}
});
chatApp.emit('NEWMESSAGE', 'this is my first message');

chatApp.on({
	tags: ['CPP','PHP'],
	channel: '/foo/bar'
}, function(args, room, tags, fromClient){

});

chatApp.logout();
