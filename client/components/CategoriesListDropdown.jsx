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
  return {
    categories: state.categories.map(category => ({
      key: category.name,
      text: category.name,
      value: category.name
    }))
  }
}

export default connect(mapStateToProps)(CategoriesListDropdown)
