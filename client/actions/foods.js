import request from 'superagent'

import { error } from './error'

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
