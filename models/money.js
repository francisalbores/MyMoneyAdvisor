var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var moneySchema = new Schema({
	name : String,
	cost : Number,
	type : String, /* expense | income */
	date : { type: Date, default: Date.now }
});

module.exports = mongoose.model('money', moneySchema);