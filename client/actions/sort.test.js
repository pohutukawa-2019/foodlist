import {
  setAlphaAscending,
  setAlphaDescending,
  setWaterAscending,
  setWaterDescending,
  sortCarbonDescending,
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING,
  SORT_WATER_DESCENDING,
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

  it('setWaterDescending returns a SORT_WATER_DESCENDING action', () => {
    const action = setWaterDescending()
    expect(action.type).toBe(SORT_WATER_DESCENDING)
  })

  it('sortCarbonLowHigh returns a SORT_CARBON_LOW_HIGH action', () => {
    const action = sortCarbonDescending()
    expect(action.type).toBe(SORT_CARBON_DESCENDING)
  })

  it('setWaterAscending returns a SORT_WATER_ASCENDING action', () => {
    const action = setWaterAscending()
    expect(action.type).toBe(SORT_WATER_ASCENDING)
  })
})
