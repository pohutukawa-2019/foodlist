import makeRequest from './requestor'

const foodPath = '/api/v1/foods'

export function getFoodById (foodId) {
  return makeRequest(`${foodPath}/${foodId}`)
    .then(res => res) // TODO: insert a mapping layer here
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function appendFood (food) {
  return makeRequest(foodPath, 'post', food)
    .then(response => response.body)
    .catch(() => { throw new Error('Error accessing foods api.') })
}
