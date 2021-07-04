const pokemonData  =require('../api/pokemonData.json')
const path = require('path')

const getAll = async (req, res) => {
	try {
		const all_pokemons = await pokemonData
		res.json(all_pokemons)
	} catch (err) {
		res.status(500).send(err.message)
	}
}
const getById = async (req, res) => {
	const { id } = req.params
	try {
		const pokemon_id = await pokemonData.find((ele) => ele.id === +id)
		if(!pokemon_id) return res.sendFile(path.join(__dirname,'../public/404.html'))
		res.json(pokemon_id)
	} catch (err) {
		res.status(500).send(err.emessage)
	}

}
const getInfo = async (req, res) => {
	const { id, info } = req.params
	try{
		const pokemon_info = await pokemonData.find((ele) => ele.id === +id)
		if(info === 'name'){
			res.status(200).json(pokemon_info.name)
		} else if(info === 'type'){
			res.status(200).json(pokemon_info.type)
		} else if(info === 'base'){
			res.status(200).json(pokemon_info.base)
		} else if(info === 'info') {
			res.status(200).json(pokemon_info)
		} else {
			res.sendFile(path.join(__dirname,'../public/404.html'))
		}
	} catch (err) {
		res.status(500).send(err.message)
	}
}

module.exports = { getAll, getById, getInfo }