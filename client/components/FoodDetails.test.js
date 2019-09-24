import React from 'react'
import { mount } from 'enzyme'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

import FoodDetails from './FoodDetails'

jest.mock('../actions/foodDetails', () => {
  return { getFoodDetails: id => dispatch => {} }
})

const foodDetails = {
  id: 1,
  name: 'Lamb',
  categoryId: 5,
  carbonOutput: 403,
  waterUsage: 52
}

// Note: You'll see this below, and it's okay
// <FoodDetails match={{ params: { id: 1 } }} />
// We should trust react-router will normally provide these
// props even though we have to provide them from these tests.
// Another option is to create a context as described here:
// https://stackoverflow.com/a/51069021/255385
// But I can't see much advantage to the added complexity.

describe('<FoodDetails>', () => {
  it('has h2 text of Details', () => {
    const mockStore = configureStore([thunk])({ foodDetails })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodDetails match={{ params: { id: 1 } }} />
        </MemoryRouter>
      </Provider>
    )
    const h2 = wrapper.find('h2')
    expect(h2.text()).toMatch('Details')
  })

  it.skip('shows the details of a food object', () => {
    // TODO: Figure out how to test the value of the dropdown
    const mockStore = configureStore([thunk])({ foodDetails })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodDetails match={{ params: { id: 1 } }} />
        </MemoryRouter>
      </Provider>
    )
    const name = wrapper.find('[data-test="name"]')
    // const category = wrapper.find('[data-test="category"]')
    const carbon = wrapper.find('[data-test="carbon"]')
    const water = wrapper.find('[data-test="water"]')

    expect(name.text()).toBe('Lamb')
    // expect(category.text()).toBe('meat')
    expect(carbon.text()).toBe('403')
    expect(water.text()).toBe('52')
  })
})
