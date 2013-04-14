define(['jquery','underscore','backbone','bootstrap','scrollTo'], 
	function($,_,Backbone,scrollTo,Bootstrap) {
		
		NavBarView = Backbone.View.extend({
			el: "#navbar",

		initialize:function(){
			// _.bindAll(this, 'markActive');	
			console.log('navBar!');
			this.$el.affix();
		},

		events: {
			'click ul li a' : 'scroll'
		},

		scroll:function(e){
			e.preventDefault();
			target_scroll = e.target.getAttribute('href');
			
			$(document).scrollTo(target_scroll,1000);
			history.replaceState(null, '', target_scroll);
		},

	});

		return new NavBarView;
	});