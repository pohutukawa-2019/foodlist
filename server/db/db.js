const connection = require('./connection')

function getFoods (db = connection) {
  return db('foods')
    .join('carbon_outputs', 'foods.id', 'carbon_outputs.food_id')
    .join('water_usages', 'foods.id', 'water_usages.food_id')
    .select('foods.id as id', 'name', 'category_id', 'carbon_outputs.value as carbonOutput', 'water_usages.value as waterUsage')
}

function getFoodsByCategory (categoryName, db = connection) {
  return db('foods')
    .join('categories', 'foods.category_id', '=', 'categories.id')
    .select('categories.name as category', 'foods.name')
    .where('categories.name', categoryName)
}

function getFoodById (id, db = connection) {
  return db('foods')
    .join('carbon_outputs', 'carbon_outputs.food_id', '=', 'foods.id')
    .join('water_usages', 'water_usages.food_id', '=', 'foods.id')
    .join('categories', 'category_id', '=', 'categories.id')
    .select('foods.id', 'foods.name', 'categories.name as category', 'carbon_outputs.value as carbonValue', 'water_usages.value as waterUsage')
    .where('foods.id', id).first()
}

function getCategories (db = connection) {
  return db('categories')
    .select()
}

function editFood (id, updatedFood, db = connection) {
  return db('foods')
    .where('id', id)
    .update({
      name: updatedFood.name,
      category_id: updatedFood.categoryId
    })
    .then(() => {
      return db('water_usages')
        .where('water_usages.food_id', id)
        .update({
          value: updatedFood.waterUsage
        })
    })
    .then(() => {
      return db('carbon_outputs')
        .where('carbon_outputs.food_id', id)
        .update({
          value: updatedFood.carbonValue
        })
    })
}

module.exports = {
  getFoods,
  getFoodById,
  getFoodsByCategory,
  getCategories,
  editFood
}
