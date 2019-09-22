import React from 'react'

import { Dropdown } from 'semantic-ui-react'

export default class CategoriesListDropdown extends React.Component {
  render () {
    const categories = ['Fruit', 'Vegetables', 'Meat']
    return (
      <div>
        <Dropdown borderless color='green' fixed='top' inverted>
          <Dropdown.Menu>
            {categories.map(category =>
              <Dropdown.Item
                key={category}
                text={category}
              />)}
          </Dropdown.Menu>
        </Dropdown>
      </div>
    )
  }
}
