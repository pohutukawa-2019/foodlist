import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import FoodDetails from './FoodDetails'
import AddFood from './AddFood'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Route path='/' component={TopMenu} />
          <Container style={{ marginTop: 75 }}>
            <Switch>
              <Route exact path='/' component={FoodList} />
              <Route path='/details/:id' component={FoodDetails} />
              <Route path='/addfood' component={AddFood}/>
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App
