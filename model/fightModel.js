const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fightsSchema = new Schema ({
	date: {type: Date, default: Date},
	winner: {
		winner_id: {type: Number, required: true},
		winner_name: {type: String}
	},
	looser: {
		looser_id: {type: Number, required: true},
		looser_name: {type: String}
	},
})

const Fights = mongoose.model('Fights', fightsSchema)

module.exports = Fights