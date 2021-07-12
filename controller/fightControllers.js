const Fights = require('../model/fightModel')


const getFighters = async (req, res) => {
	try{
		const get = await Fights.find({}).sort({date: 'asc'})
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
		res.status(200).send(create)
	} catch(err) {
		res.status(500).send(err.message)
	}
}



module.exports = {getFighters, createFighters}