import { getFoodById } from './foods'

jest.mock('superagent')

describe('API client for food', () => {
  it('getFoodsById returns correct food', () => {
    return getFoodById(3)
      .then(food => {
        expect(food.id).toBe(3)
      })
  })

  it('getFoodsById returns an error when expected', () => {
    return getFoodById(33).catch(e => {
      expect(e.message).toBe('Error accessing foods api.')
    })
  })
})
