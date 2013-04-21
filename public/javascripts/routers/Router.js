define(['backbone','collections/Levels'], function(Backbone) {
	
	Router = Backbone.Router.extend({
		initialize : function(){
			console.log('router!');
			Backbone.history.start();
		},
	
		routes: {
			'top': 'index',
			'result': 'result'
		},

		index:function(){
			console.log('index');
		},
		result:function(){
			console.log('result');
		}
	});

	// make a collection which can be used for multiple views
	
	Router.Levels = new Levels();  
	return new Router; 
});