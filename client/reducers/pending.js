export default function (pending = false, action) {
  switch (action.type) {
    case 'GET_FOOD_PENDING':
      return true

    case 'GET_FOOD_SUCCESS':
      return false

    default:
      return pending
  }
}
