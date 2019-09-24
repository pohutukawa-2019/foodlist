import makeRequest from './requestor'

const foodPath = '/foods'

export function fetchFoodById (foodId) {
  return makeRequest(`${foodPath}/${foodId}`)
    .then(res => res.body) // TODO: insert a mapping layer here
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function appendFood (food) {
  return makeRequest(foodPath, 'post', food)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function editFood (food) {
  return makeRequest(`/foods/${food.id}`, 'put', food)
    .catch(() => { throw new Error('Error accessing edit foods api.') })
}
