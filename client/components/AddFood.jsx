import React from 'react'
import { connect } from 'react-redux'
import { appendFood } from '../api/foods'

// TODO: Replace this with an action creator.

class AddFood extends React.Component {
  state = {
    name: '',
    carbonOutput: '',
    waterUsage: '',
    category: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleAdd = () => {
    this.props.appendFood(this.state)
  }

  render () {
    const { name, carbonOutput, waterUsage } = this.state
    return (
      <div>
        <p><label>Name: </label>
          <input name='name'
            data-test='name'
            placeholder='Name' value={name}
            onChange={this.handleChange} />
        </p>
        <p><label>Carbon Output: </label>
          <input name='carbonOutput'
            data-test='carbon'
            value={carbonOutput}
            placeholder='Carbon Output'
            onChange={this.handleChange} />
        </p>
        <p><label>Water Usage: </label>
          <input name='waterUsage'
            data-test='water'
            placeholder='Water Usage' value={waterUsage}
            onChange={this.handleChange} />
        </p>
        <p><label>Food Group/Category: </label>
          <select name="category" data-test='category' onChange={this.handleChange}>
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

function mapDispatchToProps (dispatch) {
  return {
    appendFood: (food) => dispatch(appendFood(food))
  }
}

export default connect(null, mapDispatchToProps)(AddFood)
