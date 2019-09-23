import makeRequest from './requestor'

const foodPath = '/api/v1/foods'

export function fetchFoods () {
  return makeRequest(foodPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.') })
}
