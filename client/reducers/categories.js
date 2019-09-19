export default function categoryReducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_CATEGORIES_SUCCESS':
      return {
        categories: action.categories
      }
      // check categories naming

    default:
      return state
  }
}

const initialState = {
  categories: []
}
