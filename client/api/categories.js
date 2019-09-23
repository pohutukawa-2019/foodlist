import makeRequest from './requestor'

const categoriesPath = '/api/v1/categories'

export function fetchCategories () {
  return makeRequest(categoriesPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.') })
}
