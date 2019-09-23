import fetchCategories from '../api/categories'

import { error } from './error'

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
      .then(categories => {
        dispatch(getCategoriesSuccess(categories))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}
