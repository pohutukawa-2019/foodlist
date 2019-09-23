import {
  setAlphaAscending,
  setAlphaDescending,
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING
} from './sort'

describe('sort actions', () => {
  it('setAlphaAscending returns a SORT_ALPHABETICAL_ASCENDING action', () => {
    const action = setAlphaAscending(SORT_ALPHABETICAL_ASCENDING)
    expect(action.type).toBe(SORT_ALPHABETICAL_ASCENDING)
  })

  it('setAlphaDescending returns a SORT_ALPHABETICAL_DESCENDING action', () => {
    const action = setAlphaDescending(SORT_ALPHABETICAL_DESCENDING)
    expect(action.type).toBe(SORT_ALPHABETICAL_DESCENDING)
  })
})
