import React from 'react'
import { Form, Dropdown } from 'semantic-ui-react'

export default class EditFood extends React.Component {
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
          </Form.Group>
          <Dropdown label='Food Groups' text={this.state.food_group} selection required>
            <Dropdown.Menu>
              <Dropdown.Item text='Fruits'/>
              <Dropdown.Item text='Meat'/>
              <Dropdown.Item text='Vegetables'/>
              <Dropdown.Item text='Dairy'/>
              <Dropdown.Item text='Preserved'/>
              <Dropdown.Item text='Bread'/>
            </Dropdown.Menu>
          </Dropdown>

          <Form.Group>
            <Form.Button>Submit</Form.Button>
          </Form.Group>
        </Form>
      </>
    )
  }
}
