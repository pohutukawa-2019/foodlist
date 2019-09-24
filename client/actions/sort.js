export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING'
export const SORT_ALPHABETICAL_DESCENDING = 'SORT_ALPHABETICAL_DESCENDING'
export const SORT_CARBON_DESCENDING = 'SORT_CARBON_LOW_HIGH'

export function setAlphaAscending (sortType) {
  return {
    type: sortType
  }
}

export function setAlphaDescending (sortType) {
  return {
    type: sortType
  }
}

export function sortCarbonDescending () {
  return {
    type: SORT_CARBON_DESCENDING
  }
}
