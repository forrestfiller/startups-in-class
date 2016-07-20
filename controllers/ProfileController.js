var Profile = require('../models/Profile')

module.exports = {



    get: function(params, callback){
    	Profile.find(params, function(err, profiles){
  	  		if (err){ //something went wrong
  	  			callback(err, null)
  	  			return
  	  		}

	  		callback(null, profiles)
		})
	},

	post: function(params, callback){
		Profile.create(params, function(err, profile){
			if (err){ //something went wrong
	  	  		callback(err, null)
	  	  		return
  	  		}

  	  		callback(null, profile)
		})
	}

    
}