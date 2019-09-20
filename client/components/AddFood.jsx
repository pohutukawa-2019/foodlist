import React from 'react'

export default class AddFood extends React.Component {
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

  handleDropdown = (event) => {
    this.setState({
      category: event.target.value
    })
  }

  handleAdd = (event) => {
    console.log('handleAdd placeholder')
  }

  render () {
    const { name, carbonOutput, waterUsage } = this.state
    return (
      <div>
        <div style={{ marginTop: '100px' }}>
          <p>
            <input name='name'
              placeholder='Name' value={name}
              onChange={this.handleChange} />
          </p>
          <p>
            <input name='carbonOutput'
              value={carbonOutput}
              placeholder='Carbon Output' 
              onChange={this.handleChange} />
          </p>
          <p>
            <input name='waterUsage'
              placeholder='Water Usage' value={waterUsage}
              onChange={this.handleChange} />
          </p>
          <p><label>Food Group/Category</label><select id = "category" onChange={this.handleDropdown}>
            <option value="fruits">Fruits</option>
            <option value="vegetables">Vegetables</option>
            <option value="grains-beans-and-legumes">Grains, Beans and Legumes</option>
            <option value="fish">Fish</option>
            <option value="meat">Meat</option>
            <option value="animal-byproducts">Animal Byproducts</option>
          </select></p>
          <button type='button' onClick={this.handleAdd}>Add Food</button>
        </div>
      </div>
    )
  }
}
