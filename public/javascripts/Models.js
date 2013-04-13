define(['backbone'],function(Bb){
	
	
	CheckTime = Bb.Model.extend({
		
		initialize: function(){
			now = new Date();
			this.current_check_time(now.getHours());
			this.get_now(now);
		},

		checkTimes: {
			0:'Before Breakfest',
			1:'After Breakefest',
			2:'Before Lunch',
			3:'After Lunch',
			4:'Before Dinner',
			5:'After Dinner',
			6:'Before Sleep',
			7: 'After Sleep'
		},

		current_check_time: function(thishour){
			var when = '';
			switch(thishour){
				case 0:case 1:case 2: case 3: case 4: case 5:
					when = this.checkTimes[7];
					break;
				case 6: case 7:
					when = this.checkTimes[0];
					break;
				case 8:case 9:
					when = this.checkTimes[1];
					break;
				case 10: case 11:
					when = this.checkTimes[2];
					break;
				case 12: case 13:
					when = this.checkTimes[3];
					break;
				case 14: case 15: case 16: case 17:
					when = this.checkTimes[4];
					break;
				case 18: case 19: case 20:
					when = this.checkTimes[5];
					break;
				case 21: case 22: case 23:
					when = this.checkTimes[6];
			}

			this.set({check_time: when});
		},

		get_now: function(raw_time){
			console.log(raw_time);
			this.set('format_time', raw_time.getDate());
		}
	});
	
	User = Bb.Model.extend({
   		defaults:{
   			name : 'Guest'	
   		},

   		initialize:function(){
   			this.set_name();
   		},
   		
   		set_name: function(){
   			if(window.localStorage.user){
   				this.set({name: window.localStorage.user})
   			}
   		}
   		
    });

	Level = Bb.Model.extend({

		defaults : {
			level: 5.8,
			datetime : Date.now(),
		}

	});

	return {
		CheckTime: CheckTime,
		Level: Level,
		User: User
	};

});