module.exports = {
  reset,
  getFoods,
  getFoodsByCategory
}

const defaultFoods = [
  {
    category: 'Fruits',
    name: 'Tomatoes'
  },
  {
    category: 'Fruits',
    name: 'Oranges'
  },
  {
    category: 'Fruits',
    name: 'Apples'
  },
  {
    category: 'Fruits',
    name: 'Strawberries'
  },
  {
    category: 'Fruits',
    name: 'Avocados'
  },
  {
    category: 'Fruits',
    name: 'Plums'
  }
]

let foods = defaultFoods

function reset () {
  foods = [...defaultFoods]
}

function getFoods () {
  return foods
}

async function getFoodsByCategory (category) {
  return Promise.resolve(foods.filter(food => food.category === category))
}
