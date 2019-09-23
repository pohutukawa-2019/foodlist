/**
 * @jest-environment node
 */
// The previous docblock silences annoying react warnings during test runs

import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import { render } from 'enzyme'

import CategoriesListDropDown from './CategoriesListDropdown'
import { categories } from '../test/data'

describe('<CategoriesListDropDown>', () => {
  it('renders a dropdown list with every category', () => {
    const mockStore = configureStore()({ categories })
    const wrapper = render(
      <Provider store={mockStore}>
        <MemoryRouter>
          <CategoriesListDropDown />
        </MemoryRouter>
      </Provider>
    )
    expect(wrapper.find('[role="option"]').length).toBe(categories.length)
  })
})
