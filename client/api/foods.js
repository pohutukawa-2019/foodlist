import makeRequest from './requestor'

const foodPath = '/api/v1/foods'

export function fetchFoodById (foodId) {
  return makeRequest(`${foodPath}/${foodId}`)
    .then(res => res.body) // TODO: insert a mapping layer here
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function fetchFoods () {
  return makeRequest(foodPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.') })
}
