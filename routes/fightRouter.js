const express = require('express')
const router = express.Router();
const { getFighters, createFighters, deleteFighters } = require('../controller/fightControllers')

router.get('/', getFighters)
router.post('/save', createFighters)
router.delete('/:id', deleteFighters)

module.exports = router