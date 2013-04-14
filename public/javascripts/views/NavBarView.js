define(['jquery','underscore','backbone','bootstrap','scrollTo'], 
		function($,_,Backbone,scrollTo,Bootstrap) {
   	
   	NavBarView = Backbone.View.extend({
		el: "#navbar",

		initialize:function(){
			// _.bindAll(this)	
			console.log('navBar!');
			this.$el.affix();
		},

		events: {
			'click ul li a' : 'scroll'
		},

		scroll:function(e){
			target_scroll = e.target.getAttribute('href');
			e.preventDefault();
			$(document).scrollTo(target_scroll,1000);		
		}

	});

   return new NavBarView;
});