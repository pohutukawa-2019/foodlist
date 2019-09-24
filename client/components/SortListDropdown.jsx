import React, { Component } from 'react'
import { Dropdown } from 'semantic-ui-react'
import { connect } from 'react-redux'

import {
  setAlphaAscending,
  setAlphaDescending
} from '../actions/sort'

class SortListDropdown extends Component {
  dropdownHandler = (evt) => {
    const sortType = evt.target.textContent
    sortType === 'Ascending'
      ? this.props.setAlphaAscending()
      : this.props.setAlphaDescending()
  }

  render () {
    return (
      <>
        <Dropdown text='Sort A-Z'>
          <Dropdown.Menu>
            <Dropdown.Item
              text='Ascending'
              onClick={this.dropdownHandler}
            />
            <Dropdown.Item
              text='Descending'
              onClick={this.dropdownHandler}
            />
          </Dropdown.Menu>
        </Dropdown>
      </>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAlphaAscending: () => dispatch(setAlphaAscending()),
    setAlphaDescending: () => dispatch(setAlphaDescending())
  }
}

export default connect(null, mapDispatchToProps)(SortListDropdown)
