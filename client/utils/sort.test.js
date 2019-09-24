import {
  SORT_ALPHABETICAL_ASCENDING,
  SORT_ALPHABETICAL_DESCENDING
} from '../actions/sort'

import { sortAlphabetical } from './sort'

describe('sortAlphabetical function', () => {
  const foods = [
    {
      id: 1,
      name: 'Lamb',
      category_id: 5,
      carbonOutput: 20.85,
      waterUsage: 8763
    }, {
      id: 2,
      name: 'Beef',
      category_id: 5,
      carbonOutput: 13.78,
      waterUsage: 15000
    }, {
      id: 3,
      name: 'Turkey',
      category_id: 5,
      carbonOutput: 5.83,
      waterUsage: 5291
    }
  ]

  it('returns foods array in ascending name order', () => {
    const actual = sortAlphabetical(SORT_ALPHABETICAL_ASCENDING, foods)
    const expected = [
      {
        id: 2,
        name: 'Beef',
        category_id: 5,
        carbonOutput: 13.78,
        waterUsage: 15000
      }, {
        id: 1,
        name: 'Lamb',
        category_id: 5,
        carbonOutput: 20.85,
        waterUsage: 8763
      }, {
        id: 3,
        name: 'Turkey',
        category_id: 5,
        carbonOutput: 5.83,
        waterUsage: 5291
      }
    ]
    expect(actual).toStrictEqual(expected)
  })
  it('returns foods array in descending name order', () => {
    const actual = sortAlphabetical(SORT_ALPHABETICAL_DESCENDING, foods)
    const expected = [
      {
        id: 3,
        name: 'Turkey',
        category_id: 5,
        carbonOutput: 5.83,
        waterUsage: 5291
      }, {
        id: 1,
        name: 'Lamb',
        category_id: 5,
        carbonOutput: 20.85,
        waterUsage: 8763
      }, {
        id: 2,
        name: 'Beef',
        category_id: 5,
        carbonOutput: 13.78,
        waterUsage: 15000
      }
    ]
    expect(actual).toStrictEqual(expected)
  })
})
