import { SORT_ALPHABETICAL_ASCENDING, SORT_ALPHABETICAL_DESCENDING } from '../actions/sort'

export default function sortTypeReducer (state = initialState, action) {
  switch (action.type) {
    case SORT_ALPHABETICAL_ASCENDING:
    case SORT_ALPHABETICAL_DESCENDING:
      return action.type

    default:
      return state
  }
}

const initialState = ''
