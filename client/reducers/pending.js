export default function (pending = false, action) {
  switch (action.type) {
    case 'GET_FOOD_PENDING':
    case 'GET_CATEGORIES_PENDING':
    case 'GET_FOOD_DETAILS_PENDING':
      return true

    case 'GET_FOOD_SUCCESS':
    case 'GET_CATEGORIES_SUCCESS':
    case 'GET_FOOD_DETAILS_SUCCESS':
      return false

    default:
      return pending
  }
}
