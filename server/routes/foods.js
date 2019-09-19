const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.get('/category/:categoryName', (req, res) => {
  const categoryName = req.params.categoryName
  db.getFoodsByCategory(categoryName)
    .then(food => res.status(200).json(food))
})

module.exports = router
