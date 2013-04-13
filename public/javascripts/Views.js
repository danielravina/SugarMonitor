define(['backbone','underscore'],function(Bb,_){
	
	CheckTimeView = Bb.View.extend({
		el: $('#weekDay'),

		template: _.template("<%= check_time %>"),


		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.prepend(this.template(this.model.toJSON()));
		}
	});

	NowView = Bb.View.extend({
		el: $('#now'),

		template: _.template("<%= format_time %>"),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.prepend(this.template(this.model.toJSON()));
			return this;
		}
	});

	UserView = Backbone.View.extend({
		el: $('#username'),

		template: _.template('<%= name %>'),

		initialize: function(){
			this.render();
		},

		render: function(){
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});
	
  	LevelView = Bb.View.extend({
		
		initialize: function(){
			this.render();
		},

		// template : _.template( $('#level_list').html() ),
		tagName: 'li',

		render: function(){
			// this.$el.html(this.template(this.model.toJSON()));
		}
	});

    return {
    	UserView:UserView,
    	LevelView:LevelView,
    	CheckTimeView:CheckTimeView,
    	NowView:NowView
    }
});
