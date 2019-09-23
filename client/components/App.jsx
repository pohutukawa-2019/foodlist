import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import AddFood from './AddFood'
import EditFood from './EditFood'
import FoodDetails from './FoodDetails'

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
              <Route path='/edit/:foodId' component={EditFood} />
              <Route path='/addfood' component={AddFood} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App
