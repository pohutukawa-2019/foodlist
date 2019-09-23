import React from 'react'

import { mount } from 'enzyme'

import FoodDetails from './FoodDetails'

FoodDetails.componentDidMount = () => {}

describe('<FoodDetails>', () => {
  it('has h2 text of Details', () => {
    const wrapper = mount(<FoodDetails />)
    const h2 = wrapper.find('h2')
    expect(h2.text()).toMatch('Details')
  })

  it('shows the details of a food object', () => {
    const foodDetails = {
      name: 'Turkey',
      category: 'meat',
      carbon_output: 403,
      water_usage: 52
    }

    const wrapper = mount(<FoodDetails foodDetails={foodDetails} />)
    const name = wrapper.find('[data-test="name"]')
    const category = wrapper.find('[data-test="category"]')
    const carbon = wrapper.find('[data-test="carbon"]')
    const water = wrapper.find('[data-test="water"]')

    expect(name.text()).toBe('Turkey')
    expect(category.text()).toBe('meat')
    expect(carbon.text()).toBe('403')
    expect(water.text()).toBe('52')
  })
})
