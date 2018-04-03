import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import PrivateRoute from 'containers/PrivateRoute'
import Todos from 'pages/Todos'
import Auth from 'pages/Auth'

let Root = ({ user }) => (
  <Router>
    <Switch>
      <Route path='/auth' component={Auth} />
      <PrivateRoute path='/todo-groups/:groupId?' component={Todos} user={user} />
    </Switch>
  </Router>
)

Root.propTypes = {
  user: PropTypes.object
}

Root = connect(
  state => ({
    user: state.auth.user
  })
)(Root)

export default Root
