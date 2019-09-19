export default function categoryReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return action.categories

    default:
      return state
  }
}

const initialState = []
