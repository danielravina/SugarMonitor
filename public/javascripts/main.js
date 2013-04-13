require.config({
	paths: {
		"jquery"     : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone"   : "lib/backbone",
		"bootstrap"  : "lib/bootstrap",
		"scrollTo"   : "lib/scrollTo"
	},

	shim :{
		'init':{
        	deps :['backbone','bootstrap','scrollTo']
        },
		'backbone': {
            deps: ['jquery','underscore']
        },
        'bootstrap': {
        	deps: ['jquery']
        },
        'scrollTo' : {
        	deps: ['jquery']
        }

	}
});

require(['jquery'
		,'underscore'
		,'backbone'
		,'bootstrap'
		,'scrollTo'
		,'Router'
		,'Models'
		,'Views'], function() {
			
	router        = new Router;
	checkTime     = new CheckTime;
	checkTimeView = new CheckTimeView({model : checkTime});
	user          = new User;
	userView      = new UserView({model: user});

	$(document).ready(function(){
			height = window.innerHeight;
			height = height.toString() +'px';
			
			
			$('section').css('height',height);
			$('#navbar').affix({
	    		top: function() {
		      		brw = $(window).width();
		      		if (brw <= 768) alert('good;')
		  		}
			});

		$('#navbar ul li a').click(function(){
			
			scroll_traget = $(this).attr('class');
			
			$.scrollTo('#'+scroll_traget, 1000)
		});

		$('body').fadeIn('200');
	}); // dom ready
				
});



