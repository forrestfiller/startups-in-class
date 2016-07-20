var express = require('express')
var router = express.Router()
var Startup = require('../models/Startup')
var Profile = require('../models/Profile')
var ProfileController = require('../controllers/ProfileController')
var StartupController = require('../controllers/StartupController')
var controllers = {
    startup: StartupController,
    profile: ProfileController
}

router.post('/:resource', function(req, res, next) {
	var resource = req.params.resource
	if (resource == 'profile'){ // create a profile
		Profile.create(req.body, function(err, profile){
			if (err){ //something went wrong
	  	  		res.json({
	  	  			confirmation: 'fail',
	  	  			message: err
	  	  		})

	  	  		return
  	  		}

  	  		//it worked:
  	  		res.json({
  	  			confirmation: 'success',
  	  			profile: profile
  	  		})

		})
	} 

	if (resource == 'startup'){ // create a startup
		Startup.create(req.body, function(err, startup){
			if (err){ //something went wrong
  	  		res.json({
  	  			confirmation: 'fail',
  	  			message: err
  	  		})

  	  		return
  	  		}
  	  		//it worked:
  	  		res.json({
  	  			confirmation: 'success',
  	  			startup: startup
  	  		})

		})
	} 	
})


router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource

    var controller = controllers[resource]
    controller.get(req.query, function(err, results){
        if (err){
            res.json({
                confirmation: 'fail',
                message: err
            })
            return
        }
        
        res.json({
            confirmation: 'success',
            results: results
        })
        return
    })
  
  // if (resource == 'startup'){ // user is requesting all startup info from DB
  //   StartupController.get(req.query, function(err, results){
  //     if (err){
  //         res.json({
  //             confirmation: 'fail',
  //             message: err
  //         })
  //         return
  //       }
        

  //       res.json({
  //           confirmation: 'success',
  //           results: results
  //       })
  //       return
  //     })
  // }

  // if (resource == 'profile'){ // user is requesting all startup info from DB
  // 	// DB querry for all startups in our  backend:

  //   Profile.find(req.query, function(err, profiles){
  // 	  if (err){ //something went wrong
  // 	    res.json({
		//   confirmation: 'fail',
		//   message: err
  // 	  	})
  // 	  	return
  // 	  }

	 //  res.json({
	 //    confirmation: 'success',
	 //  	profiles: profiles
	 //  })

  // 	})
  // }  
  
})


  




module.exports = router
