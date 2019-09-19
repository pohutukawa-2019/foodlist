module.exports = {
  reset
}

const foodItem = {
  id: 1,
  name: 'Lamb',
  category: 'Meat',
  carbon_value: 20.85,
  water_usage: 8763
}

let foods = foodItem

function reset () {
  foods = [foodItem]
}