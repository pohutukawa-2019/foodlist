import makeRequest from './requestor'

const categoriesPath = '/categories'

export function fetchCategories () {
  return makeRequest(categoriesPath)
    .then(res => res.body)
    .catch(() => { throw new Error('Error accessing categories api.') })
}
