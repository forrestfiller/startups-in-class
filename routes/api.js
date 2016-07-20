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
    var controller = controllers[resource]
    if (controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Request'
        })
        return
      }

      controller.post(req.body, function(err, result){
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
  })

router.get('/:resource', function(req, res, next) {
    var resource = req.params.resource

    var controller = controllers[resource]
    if (controller == null){
        res.json({
            confirmation: 'fail',
            message: 'Invalid Request'
        })
        return
      }

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
  })

module.exports = router
