import request from 'superagent'

import {
  getCategoriesPending,
  getCategoriesSuccess,
  getCategoriesError
} from '../actions/categories'

const categoriesPath = '/api/v1/categories'

export function getCategories (categories) {
  return (dispatch) => {
    dispatch(getCategoriesPending())
    return request
      .get(`${categoriesPath}/${categories}`)
      .then(res => {
        dispatch(getCategoriesSuccess(res.body))
      })
      .catch(err => {
        dispatch(getCategoriesError(err.message))
      })
  }
}
