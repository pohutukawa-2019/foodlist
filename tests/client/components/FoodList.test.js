/**
 * @jest-environment node
 */
// The previous docblock silences annoying react warnings during test runs
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from 'enzyme'

import FoodList from '../../../client/components/FoodList'

describe('FoodList Component Tests', () => {
  // Variables for test config
  const foods = [
    {
      id: 1,
      name: 'Lamb',
      category_id: 5,
      carbonOutput: 20.85,
      waterUsage: 8763
    },
    {
      id: 2,
      name: 'Beef',
      category_id: 5,
      carbonOutput: 13.78,
      waterUsage: 15000
    },
    {
      id: 3,
      name: 'Turkey',
      category_id: 5,
      carbonOutput: 5.83,
      waterUsage: 5291
    },
    {
      id: 4,
      name: 'Broccoli',
      category_id: 2,
      carbonOutput: 5.71,
      waterUsage: 322
    },
    {
      id: 5,
      name: 'Tuna',
      category_id: 4,
      carbonOutput: 5.26,
      waterUsage: null
    },
    {
      id: 6,
      name: 'Salmon',
      category_id: 4,
      carbonOutput: 5.15,
      waterUsage: 1400
    },
    {
      id: 7,
      name: 'Cheese',
      category_id: 6,
      carbonOutput: 4.47,
      waterUsage: 5000
    },
    {
      id: 8,
      name: 'Pork',
      category_id: 5,
      carbonOutput: 4.45,
      waterUsage: 4800
    },
    {
      id: 9,
      name: 'Greek Yogurt',
      category_id: 6,
      carbonOutput: 3.49,
      waterUsage: 2000
    },
    {
      id: 10,
      name: 'Chicken',
      category_id: 5,
      carbonOutput: 3.37,
      waterUsage: 3900
    },
    {
      id: 11,
      name: 'Milk',
      category_id: 6,
      carbonOutput: 3.17,
      waterUsage: 1020
    },
    {
      id: 12,
      name: 'Eggs',
      category_id: 6,
      carbonOutput: 3.06,
      waterUsage: 3265
    },
    {
      id: 13,
      name: 'Rice',
      category_id: 3,
      carbonOutput: 2.08,
      waterUsage: 3400
    },
    {
      id: 14,
      name: 'Potatoes',
      category_id: 2,
      carbonOutput: 1.46,
      waterUsage: 250
    },
    {
      id: 15,
      name: 'Beans',
      category_id: 3,
      carbonOutput: 1.4,
      waterUsage: null
    },
    {
      id: 16,
      name: 'Tomatoes',
      category_id: 1,
      carbonOutput: 1.39,
      waterUsage: 180
    },
    {
      id: 17,
      name: 'Tofu',
      category_id: 3,
      carbonOutput: 1.38,
      waterUsage: 925
    },
    {
      id: 18,
      name: 'Lentils',
      category_id: 3,
      carbonOutput: 0.78,
      waterUsage: 4055
    },
    {
      id: 19,
      name: 'Peanut Butter',
      category_id: 3,
      carbonOutput: 0.42,
      waterUsage: 625
    },
    {
      id: 20,
      name: 'Nuts',
      category_id: 3,
      carbonOutput: 0.39,
      waterUsage: 3100
    },
    {
      id: 21,
      name: 'Oranges',
      category_id: 1,
      carbonOutput: 1.7,
      waterUsage: 220
    },
    {
      id: 22,
      name: 'Apples',
      category_id: 1,
      carbonOutput: 1.2,
      waterUsage: 420
    },
    {
      id: 25,
      name: 'Strawberries',
      category_id: 1,
      carbonOutput: 7.2,
      waterUsage: 276
    },
    {
      id: 23,
      name: 'Corn',
      category_id: 2,
      carbonOutput: 2.7,
      waterUsage: 900
    },
    {
      id: 24,
      name: 'Lettuce',
      category_id: 2,
      carbonOutput: 4.72,
      waterUsage: 237
    },
    {
      id: 26,
      name: 'Avocados',
      category_id: 1,
      carbonOutput: 2.53,
      waterUsage: 1284
    },
    {
      id: 27,
      name: 'Plums',
      category_id: 1,
      carbonOutput: 1.55,
      waterUsage: 1612
    }
  ]
  const fruits = [
    {
      id: 16,
      name: 'Tomatoes',
      category_id: 1,
      carbonOutput: 1.39,
      waterUsage: 180
    },
    {
      id: 21,
      name: 'Oranges',
      category_id: 1,
      carbonOutput: 1.7,
      waterUsage: 220
    },
    {
      id: 22,
      name: 'Apples',
      category_id: 1,
      carbonOutput: 1.2,
      waterUsage: 420
    },
    {
      id: 25,
      name: 'Strawberries',
      category_id: 1,
      carbonOutput: 7.2,
      waterUsage: 276
    },
    {
      id: 26,
      name: 'Avocados',
      category_id: 1,
      carbonOutput: 2.53,
      waterUsage: 1284
    },
    {
      id: 27,
      name: 'Plums',
      category_id: 1,
      carbonOutput: 1.55,
      waterUsage: 1612
    }
  ]

  it('<FoodList> renders an <a> for every food', () => {
    const mockStore = configureStore()({ foods })
    const wrapper = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodList />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('a').length).toBe(foods.length)
  })

  it('<FoodList> renders an <a> for every food in a category', () => {
    const mockStore = configureStore()({ foods: fruits })
    const wrapper = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodList />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('a').length).toBe(fruits.length)
  })
})
