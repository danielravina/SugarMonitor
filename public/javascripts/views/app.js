define(['jquery','underscore','backbone'], function($,_,Backbone) {

	App = Backbone.View.extend({

		el:".container",

		initialize:function(){
			this.adjust_height();
			$('body').fadeIn('200'); // lazy
		},

		adjust_height: function(){
			height = window.innerHeight;
			str_height = height.toString() +'px';
			this.$('section').css('min-height',str_height);				
		},


	});

	return App; 

});