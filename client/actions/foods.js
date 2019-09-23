import request from 'superagent'

import { error } from './error'

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

    request
      .get('/api/v1/foods')
      .then(res => dispatch(getFoodsSuccess(res.body)))
      .catch(err => dispatch(error(err.message)))
  }
}
