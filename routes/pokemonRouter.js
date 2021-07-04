const express = require('express');
const router = express.Router();
const { getAll, getById, getInfo } = require('../controller/pokemonController')

router.get('/', getAll)
router.get('/:id', getById);
router.get('/:id/:info', getInfo)

module.exports = router;
