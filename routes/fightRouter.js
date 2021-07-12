const express = require('express')
const router = express.Router();
const { getFighters, createFighters } = require('../controller/fightControllers')

router.get('/', getFighters)
router.post('/save', createFighters)

module.exports = router