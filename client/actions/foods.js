import { error } from './error'

import fetchFoods from '../api/fetchFoods'

export const GET_FOOD_PENDING = 'GET_FOOD_PENDING'
export const GET_FOOD_SUCCESS = 'GET_FOOD_SUCCESS'

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
