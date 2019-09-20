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
// ROUTE TEST NEEDS TO BE WRITTEN
function addFood (newFood, db = connection) {
  let testObj

  return db('foods')
    .insert({ name: newFood.name, category_id: newFood.category_id })
    .then(id => {
      const carbonObj = {
        food_id: id[0],
        value: newFood.carbonOutput
      }
      testObj = carbonObj.food_id
      return carbonObj
    })
    .then((el) => addCarbonOutput(el, db))
    .then(id => {
      const waterObj = {
        food_id: testObj,
        value: newFood.waterUsage
      }
      return waterObj
    })
    .then((el) => addWaterUsage(el, db))
    .then(() => getFoods(db))
}

function addCarbonOutput (newFoodCarbon, db = connection) {
  return db('carbon_outputs')
    .insert(newFoodCarbon)
}

function addWaterUsage (newFoodWater, db = connection) {
  return db('water_usages')
    .insert(newFoodWater)
}

module.exports = {
  getFoods,
  getFoodById,
  getFoodsByCategory,
  getCategories,
  addFood
}
