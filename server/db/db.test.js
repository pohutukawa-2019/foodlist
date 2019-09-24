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
      carbonOutput: 20.85,
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
        expect(food.carbonOutput).toBe(newFoodItem.carbonOutput)
      })
  })

  it('editFood() can update details of food', () => {
    const foodToEdit = {
      id: 1,
      name: 'Chicken',
      categoryId: 3,
      carbonOutput: 18.75,
      waterUsage: 490
    }
    return db.editFood(foodToEdit.id, foodToEdit, testDb)
      .then(() => {
        db.getFoodById(foodToEdit.id)
          .then((updatedFood) => {
            expect(updatedFood.name).toBe(foodToEdit.name)
            expect(updatedFood.categoryId).toBe(foodToEdit.categoryId)
            expect(updatedFood.carbonOutput).toBe(foodToEdit.cartbonOutput)
            expect(updatedFood.waterUsage).toBe(foodToEdit.waterUsage)
          })
      })
  })
})
