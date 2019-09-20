import { foodDetails } from './foodDetails'

jest.mock('superagent')

test(' foodDetails returns correct food ', () => {
  return foodDetails(3)
    .then(foodDetails => {
      expect(foodDetails).toBe(3)
    })
})

test(' getFoodDetailsPending returns an error when expected ', () => {
  return FoodDetailsPending(33)
    .catch(e => {
      expect(e.message).toBe('Error accessing foods pending.')
    })
})

test(' getFoodDetailsError returns error ', () => {
  return getFoodDetailsError(3)
    .then(err => {
      expect(err).toBe(3)
    })
})
