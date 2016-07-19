//firstname, lastname, email, password
var mongoose = require('mongoose')

var ProfileSchema = new mongoose.Schema({
	firstname: {type:String, default:''},
	lastname: {type:String, default:''},
	email: {type:String, default:''},
	password: {type:String, default:''}
})

module.exports = mongoose.model('ProfileSchema', ProfileSchema)