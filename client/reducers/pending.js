export default function (pending = false, action) {
  switch (action.type) {
    case 'GET_FOOD_PENDING':
    case 'GET_CATEGORIES_PENDING':
      return true

    case 'GET_FOOD_SUCCESS':
    case 'GET_CATEGORIES_SUCCESS':
      return false

    default:
      return pending
  }
}
