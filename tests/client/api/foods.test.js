import { getFoodById } from '../../../client/api/foods'

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
