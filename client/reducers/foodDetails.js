// import { GET_FOOD_DETAILS_SUCCESS } from '../actions/foods'

export default function foodDetails (state = {}, action) {
  switch (action.type) {
    case 'GET_FOOD_DETAILS_SUCCESS':
      return action.foodDetails
    default:
      return state
  }
}
