define(['backbone','underscore',
	    'models/Level','scrollTo',
	    'collections/Levels',
	    'routers/Router'], function(params) {

	PromptSection = Backbone.View.extend({
		el: '#sugarPrompt',
		
		template: _.template('<%= checkTime %>'),

		initialize:function(){
			_.bindAll(this,'addOne','setSelect');
			
			this.$input     = $('#mySugarLevelInput');
			this.$select    = $('#checkTimeSelect');
			this.listenTo(this.collection, 'add', this.animatePrompt)
			

			this.render();
		},

		events:{
			'click #commitLevel' : 'addOne',
			'click .dropdown-menu li' : 'setSelect'
		},
		
		// add a level to the collection
		addOne:function () {
			theNewLevel = this.model.set({'amnt': this.$input.val(), 'checkTime':this.$select.html()});
			this.collection.add(theNewLevel);
			this.model = new Level;
		},

		animatePrompt:function(){
			$(document).scrollTo('#result',500);
		},

		setSelect:function(e){
			e.preventDefault();
			console.log(e);
			timeValue = e.target.title;
			console.log(timeValue);
			this.$select.html(timeValue);
			
		},

		render:function(){
			this.$select.append(this.template(this.model.toJSON()));
			return this;
		}
	});



	return new PromptSection({model: new Level, collection: Router.Levels}); 
});