define(['backbone','underscore',
	    'collections/Levels',
	    'routers/Router',
	    'models/level'], 
	    function() {
	
	LevelsTable = Backbone.View.extend({
		
		el: '#levelsTable',

		

		template: _.template( "<tr id='<%= cid %>'><td><%= checkTime %></td>"+
							  "<td> <%= amnt %></td>" +
							  "<td><%= insulin %></td></tr>"),
		
		initialize: function(){
			_.bindAll(this, 'render','buildTable','saveLocalStorage');
			this.listenTo(this.collection, 'add', this.render);
			this.buildTable();
		},

		buildTable:function(){
			var view = this;
			for (var i = 0; i < localStorage.length; i++){
				if(localStorage.key(i) === 'user') continue;
				data = localStorage.getItem(localStorage.key(i));
				JsonData = JSON.parse(data);
		
				record = new Level(JsonData);
				
				console.log(record);
    			this.$el.append(this.template( record.toJSON() ) );
    		}
		},

		render:function(record){
			this.saveLocalStorage(record);

			this.$el.append(this.template(record.toJSON()));
			
			this.animateTableAdd($('#'+record.cid));
		},

		animateTableAdd:function(newRecord){
			newRecord.css('display','none');
			setTimeout(function(){
				newRecord.fadeIn(300).fadeOut(300).fadeIn(300);	
			},800);
		},

		saveLocalStorage:function(record){
			str = JSON.stringify(record.toJSON());
			localStorage.setItem(record.cid, str);
			console.log(str);
		}	

	});

	return new LevelsTable({collection: Router.Levels});
});