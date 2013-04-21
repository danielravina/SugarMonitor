define(['jquery','underscore','backbone'], function($,_,Backbone) {

	App = Backbone.View.extend({

		el:".container",

		initialize:function(){
			this.adjust_height();
			$('#c_factor').tooltip({'trigger':'hover', 'title': 'The number of units per mmol of glucose in the blood','placement':'top'});
			
			/* Doesn't belong here! needs refactor */
			var date_now = new Date();
			var curr_day = date_now.getDate();
			var curr_month = date_now.getMonth();
			var fix = curr_month+1; // ????
			var curr_year = date_now.getFullYear();
			$('#now').html('Today: '+ fix+ '/'+curr_day+'/'+curr_year);
			/* ----------------------------------*/

			

			$('body').fadeIn('200'); // lazy
		},

		events:{
			'click .top' : 'scrollToTop'
		},

		adjust_height: function(){
			height = window.innerHeight;
			str_height = height.toString() +'px';
			this.$('section').css('min-height',str_height);				
		},
		scrollToTop:function(e){
			e.preventDefault();
			$(document).scrollTo('#top',1000);
		}	


	});

	return App;

});