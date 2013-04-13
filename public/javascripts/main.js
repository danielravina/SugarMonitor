

require.config({
	paths: {
		"jquery"     : "lib/jquery",
		"underscore" : "lib/underscore",
		"backbone"   : "lib/backbone",
		"bootstrap"  : "lib/bootstrap",
		"app"        : "app"
	},

	shim :{
		'app':{
        	deps :['backbone','bootstrap']
        },
		'backbone': {
            deps: ['jquery','underscore']
        },
        'bootstrap': {
        	deps: ['jquery']
        }

	}
});


require(["app"],function(){ 
			console.log(arguments)
			router        = new Router;
			checkTime     = new CheckTime;
			checkTimeView = new CheckTimeView({model : checkTime});
			user          = new User;
			userView      = new UserView({model: user});
		// levelModel =  new Model();

		// 	levelView  =  new View({model: levelModel});
		

		
		$('body').fadeIn('200');
});



