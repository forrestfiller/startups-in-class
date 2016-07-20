var Startup = require('../models/Startup')

module.exports = {

	get: function(params, callback){
		Startup.find(params, function(err, startups){
  	  		if (err){ //something went wrong
  	  			callback(err, null)
  	  			return
  	  		}

  	  		callback(null, startups)
		})
  	},

  	post: function(params, callback){
  		Startup.create(params, function(err, startup){
			if (err){ //something went wrong
  	  			callback(err, null)
  	  			return
  	  		}
  	  		
  	  		callback(null, startup)
  		})
  	}
}