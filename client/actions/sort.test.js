import {
  setAlphaAscending,
  setAlphaDescending,
  setWaterAscending,
  setWaterDescending,
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING,
  SORT_WATER_DESCENDING,
  sortCarbonAscending,
  sortCarbonDescending,
  SORT_CARBON_ASCENDING,
  SORT_WATER_ASCENDING,
  SORT_CARBON_DESCENDING
} from './sort'

describe('sort actions', () => {
  it('setAlphaAscending returns a SORT_ALPHABETICAL_ASCENDING action', () => {
    const action = setAlphaAscending()
    expect(action.type).toBe(SORT_ALPHABETICAL_ASCENDING)
  })

  it('setAlphaDescending returns a SORT_ALPHABETICAL_DESCENDING action', () => {
    const action = setAlphaDescending()
    expect(action.type).toBe(SORT_ALPHABETICAL_DESCENDING)
  })

  it('setWaterAscending returns a SORT_WATER_ASCENDING action', () => {
    const action = setWaterAscending()
    expect(action.type).toBe(SORT_WATER_ASCENDING)
  })

  it('setWaterDescending returns a SORT_WATER_DESCENDING action', () => {
    const action = setWaterDescending()
    expect(action.type).toBe(SORT_WATER_DESCENDING)
  })

  it('sortCarbonAscending returns a SORT_CARBON_ASCENDING action', () => {
    const action = sortCarbonAscending()
    expect(action.type).toBe(SORT_CARBON_ASCENDING)
  })

  it('sortCarbonDescending returns a SORT_CARBON_DESCENDING action', () => {
    const action = sortCarbonDescending()
    expect(action.type).toBe(SORT_CARBON_DESCENDING)
  })
})
