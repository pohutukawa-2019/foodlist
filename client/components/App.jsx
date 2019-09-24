import React from 'react'
import { Container } from 'semantic-ui-react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import FoodDetails from './FoodDetails'
import CategoriesListDropdown from './CategoriesListDropdown'
import AddFood from './AddFood'
import EditFood from './EditFood'

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Route path='/' component={TopMenu} />
          <Container style={{ marginTop: 75 }}>
            <Route exact path='/' component={CategoriesListDropdown} />
            <Route exact path='/' component={FoodList} />
            <Switch>
              <Route path='/details/:id' component={FoodDetails} />
              <Route path='/edit/:foodId' component={EditFood} />
              <Route path='/new' component={AddFood} />
            </Switch>
          </Container>
        </>
      </Router>
    )
  }
}

export default App
