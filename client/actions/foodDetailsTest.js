import { foodDetails } from './foodDetails'

jest.mock('superagent')

test(' foodDetails returns correct food ', () => {
  return foodDetails(3)
    .then(food => {
      expect(food.id).toBe(3)
    })
})

test(' foodDetails returns an error when expected ', () => {
  return foodDetails(33).catch(e => {
    expect(e.message).toBe('Error accessing foods api.')
  })
})
