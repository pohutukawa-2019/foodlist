export const SORT_ALPHABETICAL_ASCENDING = 'SORT_ALPHABETICAL_ASCENDING'
export const SORT_ALPHABETICAL_DESCENDING = 'SORT_ALPHABETICAL_DESCENDING'
export const SORT_WATER_DESCENDING = 'SORT_WATER_DESCENDING'
export const SORT_WATER_ASCENDING = 'SORT_WATER_ASCENDING'
export const SORT_CARBON_DESCENDING = 'SORT_CARBON_DESCENDING'
export const SORT_CARBON_ASCENDING = 'SORT_CARBON_ASCENDING'

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

export function sortCarbonAscending () {
  return {
    type: SORT_CARBON_ASCENDING
  }
}

export function sortCarbonDescending () {
  return {
    type: SORT_CARBON_DESCENDING
  }
}

export function setWaterAscending () {
  return {
    type: SORT_WATER_ASCENDING
  }
}
