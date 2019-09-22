import { error } from './error'
import makeRequest from '../api/requestor'

export const GET_FOOD_DETAILS_PENDING = 'GET_FOOD_DETAILS_PENDING'
export const GET_FOOD_DETAILS_SUCCESS = 'GET_FOOD_DETAILS_SUCCESS'

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

export function getFoodDetails (id) {
  return (dispatch) => {
    dispatch(getFoodDetailsPending())
    return makeRequest(`api/v1/getFood/${id}`)
      .then(res => {
        dispatch(getFoodDetailsSuccess(res.body))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}
