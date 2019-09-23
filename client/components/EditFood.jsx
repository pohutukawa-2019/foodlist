import React from 'react'
import { Form } from 'semantic-ui-react'

import { editFood } from '../api/foods'

export default class EditFood extends React.Component {
  // expecting mapStateToProps, hardcoded until this is implemented
  state = {
    id: this.props.id || '1',
    name: this.props.name || 'Orange',
    category: this.props.category || 'fruits',
    carbon_output: this.props.carbon_output || 101,
    water_usage: this.props.water_usage || 88
  }

  onChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onNumberChangeHandler = (evt) => {
    this.setState({
      [evt.target.name]: Number(evt.target.value)
    })
  }

  dropdownHandler = (evt, result) => {
    this.setState({
      category: result.value
    })
  }

  onSubmit = () => {
    editFood(this.state)
  }

  capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

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
              onChange={this.onNumberChangeHandler}
              name='carbon_output'
              type='number'
              label='CO2 Output'
              placeholder='Enter CO2 output here'
              required
            />
            <Form.Input
              value={this.state.water_usage}
              onChange={this.onNumberChangeHandler}
              name='water_usage'
              type='number'
              label='Water Usage'
              placeholder='Enter water usage here'
              required
            />
            <Form.Dropdown
              label='Category'
              name='category'
              placeholder='Please select a category'
              text={this.capitalize(this.state.category)}
              options={this.options}
              onChange={this.dropdownHandler}
              selection
              required
              clearable
              closeOnChange
            >
            </Form.Dropdown>
          </Form.Group>
          <Form.Group>
            <Form.Button
              onClick={() => { this.onSubmit() }}
            >
              Submit
            </Form.Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}
