import React from 'react'

import { appendFood } from '../api/foods'

export default class AddFood extends React.Component {
  state = {
    name: '',
    carbonOutput: '',
    waterUsage: '',
    categoryId: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleDropdown = (event) => {
    this.setState({
      categoryId: event.target.value
    })
  }

  handleAdd = () => {
    appendFood(this.state)
      .then(() => this.refreshList())
  }

  refreshList = (err) => {
    this.setState({
      error: err,
      addFoodVisible: false
    })
  }

  render () {
    const { name, carbonOutput, waterUsage } = this.state
    return (
      <div>
        <p><label>Name: </label>
          <input name='name'
            placeholder='Name' value={name}
            onChange={this.handleChange} />
        </p>
        <p><label>Carbon Output: </label>
          <input name='carbonOutput'
            value={carbonOutput}
            placeholder='Carbon Output' 
            onChange={this.handleChange} />
        </p>
        <p><label>Water Usage: </label>
          <input name='waterUsage'
            placeholder='Water Usage' value={waterUsage}
            onChange={this.handleChange} />
        </p>
        <p><label>Food Group/Category: </label>
          <select id = "category" onChange={this.handleDropdown}>
            <option value="" defaultValue hidden>Choose food group</option>
            <option value="1">Fruits</option>
            <option value="2">Vegetables</option>
            <option value="3">Grains, Beans and Legumes</option>
            <option value="4">Fish</option>
            <option value="5">Meat</option>
            <option value="6">Animal Byproducts</option>
          </select></p>
        <button type='button' onClick={this.handleAdd}>Add Food</button>
      </div>
    )
  }
}
