import React from 'react'
import { mount } from 'enzyme'

import FoodLabel from './FoodLabel'

FoodLabel.prototype.componentDidMount = () => {}

jest.mock('../utils/getLevel.js', () => {
  return {
    getWaterLevel: function (waterUsage) {
      return { color: 'green' }
    },
    getCarbonLevel: function (carbonOutput) {
      return { color: 'red' }
    }
  }
})

const food = {
  id: 4,
  name: 'Turkey',
  category: 'meat',
  carbonOutput: 403,
  waterUsage: 52
}

describe('<FoodLabel>', () => {
  it('shows the correct color for water usage', () => {
    const wrapper = mount(<FoodLabel food={food} />)
    const water = wrapper.find('[data-test="waterLabel"]').first()
    expect(water.hasClass('green')).toBeTruthy()
  })

  it('shows the correct color for carbon output', () => {
    const wrapper = mount(<FoodLabel food={food} />)
    const carbon = wrapper.find('[data-test="carbonLabel"]').first()
    expect(carbon.hasClass('red')).toBeTruthy()
  })
})
