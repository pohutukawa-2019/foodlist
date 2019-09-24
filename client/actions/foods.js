import { error } from './error'
import { getFoodsByCategory } from '../api/foods'

import fetchFoods from '../api/fetchFoods'

export const GET_FOOD_PENDING = 'GET_FOOD_PENDING'
export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS'
export const GET_CATEGORY_PENDING = 'GET_CATEGORY_PENDING'
export const GET_CATEGORY_SUCCESS = 'GET_CATEGORY_SUCCESS'

export function getFoodsPending () {
  return {
    type: GET_FOOD_PENDING
  }
}

export function getFoodsSuccess (foods) {
  return {
    type: GET_FOOD_SUCCESS,
    foods
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodsPending())
    return fetchFoods()
      .then(foods => {
        dispatch(getFoodsSuccess(foods))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}

export function getCategoryPending () {
  return {
    type: GET_CATEGORY_PENDING
  }
}

export function getCategorySuccess (category) {
  return {
    type: GET_CATEGORY_SUCCESS,
    category
  }
}

export function getCategory (categoryName) {
  return dispatch => {
    dispatch(getCategoryPending())
    return getFoodsByCategory(categoryName)
      .then(foods => dispatch(getCategorySuccess(foods)))
      .catch(err => dispatch(error(err.message)))
  }
}
