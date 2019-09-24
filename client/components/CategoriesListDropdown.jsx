import React from 'react'
import { connect } from 'react-redux'
import { Dropdown } from 'semantic-ui-react'

class CategoriesListDropdown extends React.Component {
  state = {
    categories: this.props.categories,
    currentCategory: ''
  }

  handleChange = (event, data) => {
    this.setState({
      currentCategory: data.value
    })
  }

  render () {
    return (
      <Dropdown color="green" fixed="top" name="category"
        selection
        placeholder="Pick a category"
        options={this.state.categories}
        onChange={this.handleChange}
      />
    )
  }
}

const mapStateToProps = state => {
  const categories = [
    'Fruit',
    'Vegetables',
    'Grains, beans, and legumes',
    'Fish', 'Meat', 'Animal Byproducts'
  ] // TODO: change out for values from store once they exist

  return {
    categories: categories.map(category => ({
      key: category,
      text: category,
      value: category
    }))
  }
}

export default connect(mapStateToProps)(CategoriesListDropdown)
