define(['backbone','underscore','models/User'], function() {

	Greetings = Backbone.View.extend({
		el: "#greetings",

		initialize:function () {
			this.render();
		},

		render: function(){
			this.$el.append(this.model.get('name'));
			return this;
		}

	});

	return new Greetings({model: new User}); 
});