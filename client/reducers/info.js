export default function infoReducer (state = { pending: true }, action) {
  switch (action.type) {
    case 'GET_FOOD_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'GET_FOOD_SUCCESS':
      return {
        ...state,
        pending: false,
        error: null
      }

    case 'GET_FOOD_ERROR':
      return {
        ...state,
        pending: false,
        error: action.message
      }

    default:
      return state
  }
}
