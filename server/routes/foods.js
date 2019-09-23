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
// TEST FOR THIS NEEDS TO BE WRITTEN
router.post('/', (req, res) => {
  db.addFood(req.body)
    //.then((el) => console.log(el))
    .then(foodID => res.status(200).json(foodID))
})

module.exports = router
