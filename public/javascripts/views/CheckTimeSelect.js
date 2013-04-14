define(['backbone','underscore','models/CheckTime'], function() {

	CheckTimeSelect = Backbone.View.extend({
		
		el: $('#checkTimeSelect'),

		template: _.template("<%= name %>"),


		initialize: function(){
			this.render();
		},

		render: function(){
			
			this.$el.html(this.template( this.model.toJSON() ) );
		}
	});

	return new CheckTimeSelect({model: new CheckTime});
	
});