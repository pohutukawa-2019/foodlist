import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default class CategoriesListDropDown extends React.Component {
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
            {/* <Dropdown.Divider /> */}
            {/* <Dropdown.Item as={Link} to='/new' Add Species></Dropdown.Item> */}
          </Dropdown.Menu>
        </Dropdown>
      </div>

    )
  }
}
