const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
}

function getFoodById (id, db = connection) {
  return db('foods')
    .join('carbon_outputs', 'carbon_outputs.food_id', '=', 'foods.id')
    .join('water_usages', 'water_usages.food_id', '=', 'foods.id')
    .join('categories', 'category_id', '=', 'categories.id')
    .select('foods.id', 'foods.name', 'categories.name as category', 'carbon_outputs.value as carbon_value', 'water_usages.value as water_usage')
    .where('foods.id', id).first()
}

module.exports = {
  getFoods,
  getFoodById
}
