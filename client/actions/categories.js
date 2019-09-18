import { error } from './error'

export const GET_CATEGORIES_PENDING = 'GET_CATEGORIES_PENDING'
function getCategoriesPending () {
  return {
    type: GET_CATEGORIES_PENDING
  }
}

export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS'
function getCategoriesSuccess (categories) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    categories
  }
}

export const GET_CATEGORIES_ERROR = 'GET_CATEGORIES_ERROR'
function getCategoriesError (error) {
  return {
    type: 'GET_CATEGORIES_ERROR',
    error
  }
}