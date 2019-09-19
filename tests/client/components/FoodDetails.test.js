import React from 'react'

import { shallow, render, mount } from 'enzyme'

import FoodDetails from '../../../client/components/FoodDetails'

FoodDetails.prototype.componentDidMount = () => {}

test('test runner is working', () => {
  expect(true).toBeTruthy()
})

test('<FoodDetails> has h2 text of Details', () => {
  const wrapper = shallow(<FoodDetails />)
  const h2 = wrapper.find('h2')
  expect(h2.text()).toMatch('Details')
})

test('it shows contents of object', () => {
  const foodDetails = {
    name: 'Turkey',
    category: 'meat',
    carbon_output: 403,
    water_usage: 52
  }
  expect(foodDetails)
})
