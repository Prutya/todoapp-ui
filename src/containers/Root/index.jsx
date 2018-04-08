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

let Root = ({ signedIn }) => (
  <Router>
    <Switch>
      <Route path='/auth' component={Auth} signedIn={signedIn} />
      <PrivateRoute path='/todo-groups/:groupId?' component={Todos} signedIn={signedIn} />
    </Switch>
  </Router>
)

Root.propTypes = {
  signedIn: PropTypes.bool
}

Root = connect(
  state => ({
    signedIn: !!state.auth.token
  })
)(Root)

export default Root
