module.exports = {
  reset,
  getFoods,
  getFoodById,
  getFoodsByCategory,
  getCategories,
  deleteFoodById
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

function deleteFoodById (id) {
  //return Promise.resolve(foods)
  return Promise.resolve(foods.filter(food => id !== food.id))
}

async function getFoodsByCategory (category) {
  return Promise.resolve(foods.filter(food => food.category === category))
}

// delete function here that returns all the remaining foods. Same as getfoods does.
