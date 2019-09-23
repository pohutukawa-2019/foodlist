import request from 'superagent'

const categoriesPath = '/api/v1/categories'

export function getCategoriesAPI (categories) {
  return request
    .get(`${categoriesPath}/${categories}`)
    .then(res => res.body)
}
