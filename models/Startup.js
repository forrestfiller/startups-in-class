var mongoose = require('mongoose')

var StartupSchema = new mongoose.Schema({
	name: {type:String, default:''},
	city: {type:String, default:''},
	image: {type:String, default:'placeholder.jpg'},
	founder: {type:String, default:''},
	shares: {type:Number, default:0}

})

module.exports = mongoose.model('StartupSchema', StartupSchema)