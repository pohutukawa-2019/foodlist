import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Menu } from 'semantic-ui-react'

export default class TopMenu extends React.Component {
  render () {
    return (
      <Menu borderless color='green' fixed='top' inverted>
        <Container>
          <Menu.Item as={Link} to='/' header>
            <Header as='h1' inverted>The Food List</Header>
          </Menu.Item>
          <Menu.Item as={Link} to='/'>Home</Menu.Item>
          <Menu.Item as={Link} to='/new'>Add New</Menu.Item>
        </Container>
      </Menu>
    )
  }
}
