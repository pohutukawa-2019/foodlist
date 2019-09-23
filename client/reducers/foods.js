import { GET_FOOD_SUCCESS } from '../actions/foods'
// import { GET_CATEGORY_SUCCESS } from '../actions/'

export default function foodReducer (state = [], action) {
  switch (action.type) {
    case GET_FOOD_SUCCESS:
      return action.foods

    case 'GET_CATEGORY_SUCCESS':
      return action.category
    default:
      return state
  }
}
