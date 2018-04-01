import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Todos from './pages/Todos'

const Root = () => (
  <Router>
    <Switch>
      <Redirect exact from='/' to='/todo-groups' />
      <Route path='/todo-groups/:groupId?' component={Todos} />
    </Switch>
  </Router>
)

export default Root
