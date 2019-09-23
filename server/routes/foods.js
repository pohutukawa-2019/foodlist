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

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const updatedFood = req.body

  db.editFood(id, updatedFood)
    .then(() => res.sendStatus(200))
    .catch((err) => res.status(400).send(err.message))
})

module.exports = router
