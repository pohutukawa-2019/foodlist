import request from 'superagent'

const foodPath = '/api/v1/foods'

export function getFoodById (foodId) {
  return request
    .get(`${foodPath}/${foodId}`)
    .catch(() => { throw new Error('Error accessing foods api.') })
}

export function appendFood (food) {
  return request
    .post(`${foodPath}/`)
    .send(food)
    .then(response => response.body)
}
