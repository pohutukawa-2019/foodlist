module.exports = {
  reset,
  getFoods,
  getFoodById,
  getFoodsByCategory,
  getCategories,
  addFood
}

const defaultCategories = [
  {
    id: 1,
    name: 'Fruits'
  },
  {
    id: 2,
    name: 'Vegetables'
  },
  {
    id: 3,
    name: 'Grains, beans, and legumes'
  },
  {
    id: 4,
    name: 'Fish'
  },
  {
    id: 5,
    name: 'Meat'
  },
  {
    id: 6,
    name: 'Animal byproducts'
  }
]

const defaultFoods = [
  {
    id: 1,
    category: 'Fruits',
    name: 'Tomatoes',
    carbonValue: 1000,
    waterUsage: 500
  },
  {
    id: 2,
    category: 'Fruits',
    name: 'Oranges',
    carbonValue: 1000,
    waterUsage: 500
  },
  {
    id: 3,
    category: 'Fruits',
    name: 'Apples',
    carbonValue: 1000,
    waterUsage: 500
  },
  {
    id: 4,
    category: 'Fruits',
    name: 'Strawberries',
    carbonValue: 1000,
    waterUsage: 500
  },
  {
    id: 5,
    category: 'Fruits',
    name: 'Avocados',
    carbonValue: 1000,
    waterUsage: 500
  },
  {
    id: 6,
    category: 'Fruits',
    name: 'Plums',
    carbonValue: 1000,
    waterUsage: 500
  }
]

let foods = defaultFoods
let categories = defaultCategories

function reset () {
  foods = [...defaultFoods]
  categories = [...defaultCategories]
}

function getCategories () {
  return Promise.resolve(categories)
}

function getFoods () {
  return Promise.resolve(foods)
}

function getFoodById (id) {
  return Promise.resolve(foods.find(food => food.id === id))
}

async function getFoodsByCategory (category) {
  return Promise.resolve(foods.filter(food => food.category === category))
}

function addFood (newFood) {
  foods.push(newFood)
  // This might be janky
  return Promise.resolve(foods)
  // ))
}

// need to change here to make sure returned id is correct
// HERE we can maybe put filter after we chuck a new food into the array. Our other DB function does not have anything at all to do with this one. Confusing.
