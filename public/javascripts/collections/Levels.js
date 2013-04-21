define(['backbone','underscore','models/Level'], function() {

	Levels = Backbone.Collection.extend({
		model: Level
		
	});

	return Levels; 
});