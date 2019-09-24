const env = require('./test-environment')
const db = require('./db')

let testDb = null

beforeEach(() => {
  testDb = env.getTestDb()
  return env.initialise(testDb)
})

afterEach(() => env.cleanup(testDb))

describe('Database functions for food', () => {
  it('getFoods() returns an array of foods', () => {
    expect.assertions(1)

    const expected = 27

    return db.getFoods(testDb)
      .then(foods => {
        const actual = foods.length
        expect(actual).toBe(expected)
      })
  })

  it('getFoods() returns waterUsage', () => {
    return db.getFoods(testDb)
      .then(foods => {
        const actual = foods
        expect(actual[0].waterUsage).toBeTruthy()
        expect(actual[0].waterUsage).not.toBeNull()
      })
  })

  it('getFoods() returns carbonOutput', () => {
    return db.getFoods(testDb)
      .then(foods => {
        const actual = foods
        expect(actual[0].carbonOutput).toBeTruthy()
        expect(actual[0].carbonOutput).not.toBeNull()
      })
  })

  it('getFoodsByCategory() returns an array of foods by category', () => {
    expect.assertions(1)

    const expected = 6

    return db.getFoodsByCategory('Fruits', testDb)
      .then(foods => {
        const actual = foods.length
        expect(actual).toBe(expected)
      })
  })

  it('getFoodById() returns a single object', () => {
    const id = 1

    const foodItem = {
      id: 1,
      name: 'Lamb',
      category: 'Meat',
      carbonValue: 20.85,
      waterUsage: 8763
    }

    return db.getFoodById(id, testDb)
      .then(food => {
        expect(food.name).toBe(foodItem.name)
      })
  })

  it('db.addFood returns a new food', () => {
    const newFoodItem = {
      name: 'Pizza',
      category: 5,
      carbonOutput: 19.76,
      waterUsage: 420
    }

    return db.addFood(newFoodItem, testDb)
      .then(food => {
        expect(food.id).toBe(28)
        return db.getFoodById(food.id, testDb)
      })
      .then(food => {
        expect(food.waterUsage).toBe(newFoodItem.waterUsage)
        expect(food.carbonValue).toBe(newFoodItem.carbonOutput)
      })
  })

it('editFood() can update details of food name', () => {
 const foodToEdit = {
  id: 1,
  name: 'Chicken'
 }
 return db.editFood(foodToEdit, testDb)
 .then()

})

it('editFood() edits details of food category', () => {
  const foodToEdit = {
   id: 1,
   categoryId: 5
  }
  return 

})

it('editFood() edits details of food carbonValue', () => {
  const foodToEdit = {
   id: 1,
   carbonValue: 20.85,
  }
  return

})

it('editFood() edits details of food waterUsage', () => {
  const foodToEdit = {
   id: 1,
   waterUsage: 8763
  }
  return
  
})
