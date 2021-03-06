import { GET_CATEGORIES_PENDING, GET_CATEGORIES_SUCCESS } from '../actions/categories'
import { GET_FOOD_PENDING, GET_FOOD_SUCCESS, ADD_FOOD_PENDING, ADD_FOOD_SUCCESS } from '../actions/foods'
// import { GET_FOOD_DETAILS_PENDING, GET_FOOD_DETAILS_SUCCESS } from '../actions/foods'
// import { GET_CATEGORY_PENDING, GET_CATEGORY_SUCCESS } from '../actions/

export default function (pending = false, action) {
  switch (action.type) {
    case GET_FOOD_PENDING:
    case GET_CATEGORIES_PENDING:
    case 'GET_CATEGORY_PENDING':
    case 'GET_FOOD_DETAILS_PENDING':
    case ADD_FOOD_PENDING:
      return true

    case GET_FOOD_SUCCESS:
    case GET_CATEGORIES_SUCCESS:
    case 'GET_CATEGORY_SUCCESS':
    case 'GET_FOOD_DETAILS_SUCCESS':
    case ADD_FOOD_SUCCESS:
      return false

    default:
      return pending
  }
}
