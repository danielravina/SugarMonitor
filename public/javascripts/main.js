require.config({
	paths: {
		"jquery"     : "lib/jquery"
		,"underscore" : "lib/underscore"
		,"backbone"   : "lib/backbone"
		,"bootstrap"  : "lib/bootstrap"
		,"scrollTo"   : "lib/scrollTo"
		,"appView"    : "views/AppView"
	},

	shim :{
		'appView' : {
			deps: ['jquery', 'backbone', 'underscore','bootstrap','scrollTo']
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

require([
	'views/App',
	'views/NavBar',
	'views/CheckTimeSelect',
	'views/Greetings',
	'views/PromptSection'
	], function() {

		new App();
	});



