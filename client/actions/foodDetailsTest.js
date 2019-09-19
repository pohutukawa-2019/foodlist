import foodDetails from './foodDetails'

test('fetchFoodDetails', () => {
  const scope = foodDetails('http://localhost')
    .get('api/v1/getFood/:id')
    .reply(200, [{ data: 'its\'s good to go' }])

  const dispatch = jest.fn()

  return foodDetails.getFoodDetailsPending()
    .then(() => {
      expect(dispatch.mock.calls[0][0].type).toBe('GET_FOOD_DETAILS_PENDING')
      expect(dispatch.mock.calls[1][0].type).toB('GET_FOOD_DETAILS_SUCCESS')
      scope.done()
    })
})
