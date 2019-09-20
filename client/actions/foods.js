import request from 'superagent'

import { error } from './error'
import { getFoodsByCategory } from '../api/foods'

export function getFoodsPending () {
  return {
    type: 'GET_FOOD_PENDING'
  }
}

export function getFoodsSuccess (foods) {
  return {
    type: 'GET_FOOD_SUCCESS',
    foods
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodsPending())

    request
      .get('/api/v1/foods')
      .then(res => dispatch(getFoodsSuccess(res.body)))
      .catch(err => dispatch(error(err.message)))
  }
}

export function getCategoryPending () {
  return {
    type: 'GET_CATEGORY_PENDING'
  }
}

export function getCategorySuccess (category) {
  return {
    type: 'GET_CATEGORY_SUCCESS',
    category
  }
}

export function getCategoryError (message) {
  return {
    type: 'ERROR',
    message
  }
}

export function getCategory (categoryName) {
  return dispatch => {
    dispatch(getCategoryPending())
    return getFoodsByCategory(categoryName)
      .then(foods => dispatch(getCategorySuccess(foods)))
      .catch(err => dispatch(getCategoryError(err.message)))
  }
}
