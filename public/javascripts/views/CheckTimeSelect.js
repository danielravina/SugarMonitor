define(['backbone','underscore','models/CheckTime'], function() {

	CheckTimeSelect = Backbone.View.extend({
		
		el: $('#checkTimeSelect'),

		template: _.template("<%= name %>"),


		initialize: function(){
			this.render();
			console.log(this.model);
		},

		render: function(){
			
			this.$el.html(this.template( this.model.toJSON() ) );
		}
	});

	return new CheckTimeSelect({model: new CheckTime});
	
});