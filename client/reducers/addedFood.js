import { ADD_FOOD_SUCCESS, GET_FOOD_PENDING } from '../actions/foods'

export default function (foodAdded = false, action) {
  switch (action.type) {
    case ADD_FOOD_SUCCESS:
      return true

    case GET_FOOD_PENDING:
      return false

    default:
      return foodAdded
  }
}
