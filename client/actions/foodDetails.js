import request from 'superagent'

export const GET_FOOD_DETAILS_PENDING = 'GET_FOOD_DETAILS_PENDING '
export const GET_FOOD_DETAILS_SUCCESS = 'GET_FOOD_DETAILS_SUCCESS'
export const ERROR = 'ERROR'

export const getFoodDetailsPending = () => {
  return {
    type: GET_FOOD_DETAILS_PENDING
  }
}

export const getFoodDetailsSuccess = (foodDetails) => {
  return {
    type: GET_FOOD_DETAILS_SUCCESS,
    foodDetails: foodDetails
  }
}

export const getFoodDetailsError = (err) => {
  return {
    type: ERROR,
    message: err
  }
}

export function fetchFoodDetails () {
  return (dispatch) => {
    dispatch(getFoodDetailsPending())
    return request
      .get('api/v1/getFood/:id')
      .then(res => {
        dispatch(getFoodDetailsSuccess(res.body))
      })
      .catch(err => {
        dispatch(getFoodDetailsError(err.message))
      })
  }
}
