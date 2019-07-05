import request from 'superagent'

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

export function getFoodsError (message) {
  return {
    type: 'GET_FOOD_ERROR',
    message
  }
}

export function getFoods () {
  return dispatch => {
    dispatch(getFoodsPending())

    request
      .get('/api/v1/foods')
      .then(res => dispatch(getFoodsSuccess(res.body)))
      .catch(err => dispatch(getFoodsError(err.message)))
  }
}
