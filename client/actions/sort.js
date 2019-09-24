export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING'
export const SORT_ALPHABETICAL_DESCENDING = 'SORT_ALPHABETICAL_DESCENDING'
export const SORT_WATER_DESCENDING = 'SORT_WATER_DESCENDING'

export function setAlphaAscending () {
  return {
    type: SORT_ALPHABETICAL_ASCENDING
  }
}

export function setAlphaDescending () {
  return {
    type: SORT_ALPHABETICAL_DESCENDING
  }
}

export function setWaterDescending () {
  return {
    type: SORT_WATER_DESCENDING
  }
}
