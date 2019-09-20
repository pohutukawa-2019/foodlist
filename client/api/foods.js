import request from 'superagent'

const foodPath = '/api/v1/foods'
const foodCategoryPath = '/api/v1/foods/category'

export function getFoodById (foodId) {
  return request
    .get(`${foodPath}/${foodId}`)
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function getFoodsByCategory (categoryName) {
  return request
    .get(`${foodCategoryPath}/${categoryName}`)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing food category api') })
}
