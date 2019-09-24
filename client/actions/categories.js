import { error } from './error'

import { fetchCategories } from '../api/categories'

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'

export function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export function getCategories () {
  return (dispatch) => {
    dispatch(getCategoriesPending())
    return fetchCategories()
      .then(res => {
        dispatch(getCategoriesSuccess(res.body))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}
