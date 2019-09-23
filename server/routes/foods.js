const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFoods()
    .then(foods => res.status(200).json(foods))
})

router.get('/:id', (req, res) => {
  db.getFoodById(Number(req.params.id))
    .then(foodData => res.json(foodData))
})

router.get('/category/:categoryName', (req, res) => {
  const categoryName = req.params.categoryName
  db.getFoodsByCategory(categoryName)
    .then(food => res.status(200).json(food))
})

router.delete('/:id', (req, res) => {
  // on wiki it says to use /:id
  const foodId = req.body.id
  db.deleteFoodById(foodId)
    .then(food => res.status(200).json(food))
})

module.exports = router
