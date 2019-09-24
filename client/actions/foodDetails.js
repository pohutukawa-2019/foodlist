import { error } from './error'
import { fetchFoodById } from '../api/foods'

export const GET_FOOD_DETAILS_PENDING = 'GET_FOOD_DETAILS_PENDING'
export const GET_FOOD_DETAILS_SUCCESS = 'GET_FOOD_DETAILS_SUCCESS'

export function getFoodDetailsPending () {
  return {
    type: GET_FOOD_DETAILS_PENDING
  }
}

export function getFoodDetailsSuccess (foodDetails) {
  return {
    type: GET_FOOD_DETAILS_SUCCESS,
    foodDetails
  }
}

export function getFoodDetails (foodId) {
  return dispatch => {
    dispatch(getFoodDetailsPending())
    return fetchFoodById(foodId)
      .then(foodDetails => {
        dispatch(getFoodDetailsSuccess(foodDetails))
      })
      .catch(err => {
        dispatch(error(err.message))
      })
  }
}
