define(['backbone'],function(Bb){
	Router = Bb.Router.extend({
		initialize:function(){
			Backbone.history.start();
		},

		routes :{
			'' : 'index'
		},

		index : function(){
			console.log('You are in: index page')
		}


	});


	return Router;
});