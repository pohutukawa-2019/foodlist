import React from 'react'
import { shallow } from 'enzyme'

import EditFood from './EditFood'

describe('<EditFood>', () => {
  it('updates the state of a property on input change', () => {
    const evt = {
      target: {
        name: 'name',
        value: 'Banana'
      }
    }
    const component = shallow(
      <EditFood />
    )
    component.instance().onChangeHandler(evt)
    expect(component.state('name')).toBe('Banana')
  })
  it('updates the state of a number property on input change, making sure it remains a number', () => {
    const evt = {
      target: {
        name: 'water_usage',
        value: '100'
      }
    }
    const component = shallow(
      <EditFood />
    )
    component.instance().onNumberChangeHandler(evt)
    expect(component.state('water_usage')).toBe(100)
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
