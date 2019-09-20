import {
  getFoodById,
  getFoodsByCategory
} from '../../../client/api/foods'

jest.mock('superagent')

test(' getFoodsById returns correct food ', () => {
  return getFoodById(3)
    .then(food => {
      expect(food.id).toBe(3)
    })
})

test(' getFoodsById returns an error when expected ', () => {
  return getFoodById(33).catch(e => {
    expect(e.message).toBe('Error accessing foods api.')
  })
})

describe('getFoodsByCategory', () => {
  it('returns the foods within a given category name', () => {
    return getFoodsByCategory('meat')
      .then(category => {
        expect(category[0].id).toBe(1)
        expect(category[1].name).toBe('Beef')
      })
  })
  it('returns an error message when a category does not exist', () => {
    return getFoodsByCategory('does-not-exist')
      .catch(error => {
        expect(error.message).toBe('Error accessing food category api')
      })
  })
})
