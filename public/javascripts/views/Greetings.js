define(['backbone','underscore','models/User'], function() {

	Greetings = Backbone.View.extend({
		el: "#greetings",

		template: _.template("<%= name %>"),

		initialize:function () {
			this.render();
		},

		render: function(){
			this.$el.append(this.template(this.model.get('name')));
			return this;
		}

	});

	return new Greetings({model: new User}); 
});