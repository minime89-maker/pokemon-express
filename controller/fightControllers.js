const Fights = require('../model/fightModel')


const getFighters = async (req, res) => {
	try{
		const get = await Fights.find({}).sort({date: 'desc'})
		res.json(get)
	} catch(err) {
		res.status(404).send(err.message)
	}
}

const createFighters = async (req, res) => {
	const { date, winner_id, winner_name, looser_id, looser_name } = req.body
	try{
		let create = await Fights.create({
			date,
			winner: {
				winner_id,
				winner_name,
			},
			looser:{
				looser_id,
				looser_name
			}	 
		})
		console.log(create)
		res.json(create)
	} catch(err) {
		res.status(500).send(err.message)
	}
}

// For testing purpose
const deleteFighters = async (req, res) => {
	const {id} = req.body
	try{
		const delete_fight = await Fights.findOneAndDelete({_id: id})
		if(!delete_fight) return res.status(404).send('Fight not found')
		res.json(delete_fight)
	} catch (err){
		res.status(500).send(err.message)
	}
}


module.exports = {getFighters, createFighters, deleteFighters}