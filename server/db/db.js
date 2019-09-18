const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function getFoodsByCategory (categoryName, db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', '=', 'categories.id')
    .select('categories.name as category', 'foods.name')
    .where('categories.name', categoryName)
}

module.exports = {
  getFoods,
  getFoodsByCategory
}
