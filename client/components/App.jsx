import React from 'react'
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'

import FoodList from './FoodList'
import TopMenu from './TopMenu'
import FoodDetails from './FoodDetails'
import EditFood from './EditFood' // remember to remove before commit

class App extends React.Component {
  render () {
    return (
      <Router>
        <>
          <Route path='/' component={TopMenu} />
          <Container style={{ marginTop: 75 }}>
            <Switch>
              <Route exact path='/' component={FoodList} />
              <Route path={ '/details/:id' } component={FoodDetails} />
            </Switch>
            {/* remember to remove before commit */}
            <Link to='/editfood'>
              Edit Food
            </Link>
            <Route path='/editfood' component={EditFood}/>
          </Container>
        </>
      </Router>
    )
  }
}

export default App
