import {
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING
} from '../actions/sort'

export function sortAlphabetical (order, foods) {
  if (order === SORT_ALPHABETICAL_ASCENDING) {
    return sortAlphabeticalAscending(foods)
  } else if (order === SORT_ALPHABETICAL_DESCENDING) {
    return sortAlphabeticalDescending(foods)
  }
}

function sortAlphabeticalAscending (foods) {
  return foods.sort(sortFunctionCallback('name'))
}

function sortAlphabeticalDescending (foods) {
  return foods.sort(sortFunctionCallback('-name'))
}

function sortFunctionCallback (property) {
  let sortOrder = 1

  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property])
    } else {
      return a[property].localeCompare(b[property])
    }
  }
}
