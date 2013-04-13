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
	now           = new NowView({model: checkTime});
	$(document).ready(function(){
			height = window.innerHeight;
			height = height.toString() +'px';
			
			
			$('section').css('min-height',height);
			$('#navbar').affix();

		$('#navbar ul li a').click(function(e){
			e.preventDefault();
			scroll_traget = $(this).attr('href');
			
			$.scrollTo(scroll_traget, 1000)
		});

		$('body').fadeIn('200');
	}); // dom ready
				
});



