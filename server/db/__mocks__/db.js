module.exports = {
  reset,
  getFoods,
  getFoodById,
  getFoodsByCategory
}

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

function reset () {
  foods = [...defaultFoods]
}

function getFoods () {
  return foods
}

function getFoodById (id) {
  return Promise.resolve(foods.find(food => food.id === id))
}

async function getFoodsByCategory (category) {
  return Promise.resolve(foods.filter(food => food.category === category))
}
