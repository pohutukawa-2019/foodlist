import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class CategoriesListDropdown extends React.Component {
  render () {
    return (
      <div>
        <Dropdown borderless='true' color='green' fixed='top' inverted='true'>
          <Dropdown.Menu>
            {this.props.categories.map(category =>
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

const mapStateToProps = state => {
  return {
    categories: [
      'Fruit', 
      'Vegetables', 
      'Grains, beans, and legumes', 
      'Fish', 'Meat', 'Animal Byproducts'
    ] // TODO: change out for values from store once they exist
  }
}

export default connect(mapStateToProps)(CategoriesListDropdown)
