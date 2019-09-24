import {
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING,
  SORT_WATER_ASCENDING,
  SORT_WATER_DESCENDING,
  SORT_CARBON_ASCENDING,
  SORT_CARBON_DESCENDING
} from '../actions/sort'

export default function sortTypeReducer (state = initialState, action) {
  switch (action.type) {
    case SORT_ALPHABETICAL_ASCENDING:
    case SORT_ALPHABETICAL_DESCENDING:
    case SORT_WATER_DESCENDING:
    case SORT_CARBON_ASCENDING:
    case SORT_CARBON_DESCENDING:
    case SORT_WATER_ASCENDING:
      return action.type

    default:
      return state
  }
}

const initialState = ''
