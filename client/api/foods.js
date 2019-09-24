import makeRequest from './requestor'

const foodPath = '/foods'
const foodCategoryPath = '/foods/category'

export function fetchFoodById (foodId) {
  return makeRequest(`${foodPath}/${foodId}`)
    .then(res => res.body) // TODO: insert a mapping layer here
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function fetchFoodsByCategory (categoryName) {
  return makeRequest(`${foodCategoryPath}/${categoryName}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing foods api') })
}

export function appendFood (food) {
  return makeRequest(foodPath, 'post', food)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function editFood (food) {
  return makeRequest(`${foodPath}/${food.id}`, 'put', food)
    .catch(() => { throw new Error('Error accessing foods api.') })
}
