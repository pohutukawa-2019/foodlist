import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { MemoryRouter } from 'react-router-dom'

import FoodDetails from './FoodDetails'

FoodDetails.componentDidMount = () => {}

const foodDetails = {
  id: 1,
  name: 'Lamb',
  categoryId: 5,
  carbonOutput: 403,
  waterUsage: 52
}

describe('<FoodDetails>', () => {
  it('has h2 text of Details', () => {
    const mockStore = configureStore()({ foodDetails })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodDetails />
        </MemoryRouter>
      </Provider>
    )
    const h2 = wrapper.find('h2')
    expect(h2.text()).toMatch('Details')
  })

  it('shows the details of a food object', () => {
    const mockStore = configureStore()({ foodDetails })
    const wrapper = mount(
      <Provider store={mockStore}>
        <MemoryRouter>
          <FoodDetails />
        </MemoryRouter>
      </Provider>
    )
    const name = wrapper.find('[data-test="name"]')
    const category = wrapper.find('[data-test="category"]')
    const carbon = wrapper.find('[data-test="carbon"]')
    const water = wrapper.find('[data-test="water"]')

    expect(name.text()).toBe('Lamb')
    expect(category.text()).toBe('meat')
    expect(carbon.text()).toBe('403')
    expect(water.text()).toBe('52')
  })
})
