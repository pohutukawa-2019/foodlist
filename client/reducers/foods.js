export default function foodReducer (state = [], action) {
  switch (action.type) {
    case 'GET_FOOD_SUCCESS':
      return action.foods

    default:
      return state
  }
}
