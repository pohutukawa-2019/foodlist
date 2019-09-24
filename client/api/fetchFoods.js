import makeRequest from './requestor'

const foodPath = '/foods'

export default function fetchFoods () {
  return makeRequest(foodPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.') })
}
