define(['backbone'], function() {

	Level = Backbone.Model.extend({
		
		defaults:{
			howMuch: 5.8,
			date : '' 
		}
		
	});

	return Level; 
});