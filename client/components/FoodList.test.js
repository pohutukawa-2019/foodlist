/**
 * @jest-environment node
 */
// The previous docblock silences annoying react warnings during test runs
import React from 'react'
import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

import { foods, fruits } from '../test/data'
import FoodList from './FoodList'

jest.mock('../actions/foods', () => {
  return { getFoods: () => dispatch => {} }
})

describe('<FoodList>', () => {
  it('renders an <a> for every food', () => {
    const mockStore = configureStore([thunk])({ foods })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodList match={{ params: {} }} />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('a').length).toBe(foods.length)
  })

  it.skip('renders an <a> for every food in a category', () => {
    // TODO: Complete once implementation of FoodList is finished
    const mockStore = configureStore([thunk])({ foods: fruits })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodList match={{ params: { category: 'Fruits' } }} />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('a').length).toBe(fruits.length)
  })
})
