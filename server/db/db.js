const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
    .join('carbon_outputs', 'foods.id', 'carbon_outputs.food_id')
    .join('water_usages', 'foods.id', 'water_usages.food_id')
    .select('foods.id as id', 'name', 'category_id', 'carbon_outputs.value as carbonOutput', 'water_usages.value as waterUsage')
}

module.exports = {
  getFoods
}
