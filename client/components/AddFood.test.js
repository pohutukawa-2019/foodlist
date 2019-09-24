import React from 'react'
import configureStore from 'redux-mock-store'

import { mount } from 'enzyme'
import { Provider } from 'react-redux'

import AddFood from './AddFood'

describe('AddFood', () => {
  it.skip('creates a new food item', () => {
    const mockStore = configureStore()({})
    const wrapper = mount(
      <Provider store={mockStore}>
        <AddFood />
      </Provider>
    )

    function getEvent (name, value) {
      return { target: { name, value } }
    }

    wrapper.find('[data-test="name"]')
      .simulate('change', getEvent('name', 'asparagus'))
    wrapper.find('[data-test="carbon"]')
      .simulate('change', getEvent('carbon', '200'))
    wrapper.find('[data-test="water"]')
      .simulate('change', getEvent('water', '400'))
    wrapper.find('[data-test="category"]')
      .simulate('change', getEvent('category', '2'))

    // TODO:
    // * Mock out the action creator function with jest.fn()
    // * Simulate a button click on the add button
    // * Verify the mock action creator was called as expected
  })
})
