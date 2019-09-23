import React from 'react'
import { shallow } from 'enzyme'

import EditFood from './EditFood'

describe('<EditFood>', () => {
  it('updates the state of a property on input change', () => {
    const evt = {
      target: {
        name: 'CO2_output',
        value: 300
      }
    }
    const component = shallow(
      <EditFood />
    )
    component.instance().onChangeHandler(evt)
    expect(component.state('CO2_output')).toBe(300)
  })
  it('updates the state of category on dropdown selection', () => {
    const evt = {}
    const result = {
      value: 'vegetables'
    }
    const component = shallow(
      <EditFood />
    )
    component.instance().dropdownHandler(evt, result)
    expect(component.state('category')).toBe('vegetables')
  })
})
