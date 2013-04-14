define(['backbone'], function() {
	
	CheckTime = Backbone.Model.extend({
	
		initialize: function(){
			now = new Date();
			thisHour = now.getHours();

			switch(thisHour){
				case 0:case 1:case 2: case 3: case 4: case 5:
					chkTime = 'Sleeping';
					break;
				case 6: case 7:
					chkTime = 'Before Breakefest';
					break;
				case 8:case 9:
					chkTime = 'After Breakfest';
					break;
				case 10: case 11:
					chkTime = 'Before Lunch';
					break;
				case 12: case 13: case 14: case 15:
					chkTime = 'After Lunch';
					break;
				case 16: case 17:
					chkTime = 'Before Dinner';
					break;
				case 18: case 19: case 20:
					chkTime = 'After Dinner';
					break;
				case 21: case 22: case 23:
					chkTime = 'Before Sleep';
			}

			 this.set({'name': chkTime});
			 this.set({'time': now})
		}

		});

	return CheckTime;
});