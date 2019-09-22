/**
 * @jest-environment node
 */
// The previous docblock silences annoying react warnings during test runs
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from 'enzyme'

import FoodList from './FoodList'
import { foods, fruits } from '../test/data'

describe('<FoodList>', () => {
  it('renders an <a> for every food', () => {
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

  it('renders an <a> for every food in a category', () => {
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
