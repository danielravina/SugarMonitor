define(['backbone'], function() {

	User = Backbone.Model.extend({
		
		initialize:function(){
			this.assign_user();
		},

		defaults:{
			name : 'Guest'
		},

		assign_user: function(){
			if (localStorage.user) {
				this.set('name', localStorage.user);
			}
			else {
				name = prompt("Hi! What's your name?");
				this.set('name', name);
				localStorage.user = name
			}
		}		
	});

	return User; 
});