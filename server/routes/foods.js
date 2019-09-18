const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.get('/:id', (req, res) => {
  db.getFoodById(req.params.id)
    .then(foodData => res.json(foodData))
})

module.exports = router
