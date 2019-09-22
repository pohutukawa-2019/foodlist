import React from 'react'
import { Form } from 'semantic-ui-react'

export default class EditFood extends React.Component {
  // expecting mapStateToProps, hardcoded until this is implemented
  state = {
    name: this.props.name || 'Orange',
    food_group: this.props.food_group || 'fruits',
    carbon_output: this.props.carbon_output || 101,
    water_usage: this.props.water_usage || 88
  }

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  dropdownHandler = (evt) => {
    this.setState({
      food_group: evt.target.value
    })
  }

  // capitalize = (string) => {
  //   return string.charAt(0).toUpperCase() + string.slice(1)
  // }

  // hardcoded, needs to pull categories from the database
  options = [
    {
      key: 'fruits',
      text: 'fruits',
      value: 'fruits'
    },
    {
      key: 'meats',
      text: 'meats',
      value: 'meats'
    },
    {
      key: 'dairy',
      text: 'dairy',
      value: 'dairy'
    }
  ]

  render () {
    return (
      <>
        <h2>Edit Food</h2>
        <Form>
          <Form.Group >
            <Form.Input
              value={this.state.name}
              onChange={this.onChangeHandler}
              name='name'
              type='text'
              label='Name'
              placeholder='Enter name here'
              required
            />
            <Form.Input
              value={this.state.carbon_output}
              onChange={this.onChangeHandler}
              name='carbon_output'
              type='number'
              label='CO2 Output'
              placeholder='Enter CO2 output here'
              required
            />
            <Form.Input
              value={this.state.water_usage}
              onChange={this.onChangeHandler}
              name='water_usage'
              type='number'
              label='Water Usage'
              placeholder='Enter water usage here'
              required
            />
            <Form.Dropdown
              label='Food Groups'
              name='food_group'
              text={this.state.food_group}
              options={this.options}
              onChange={this.dropdownHandler}
              selection
              required
              closeOnChange
            >
            </Form.Dropdown>
          </Form.Group>
          <Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}
