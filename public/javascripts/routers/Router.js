define(['backbone'], function(Backbone) {
	
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

	return new Router; 
});