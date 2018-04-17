import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { Layout } from 'antd'

import PrivateRoute from 'containers/PrivateRoute'
import Todos from 'pages/Todos'
import Auth from 'pages/Auth'

const { Header } = Layout

let Root = ({ signedIn }) => (
  <Router>
    <Layout style={{ height: '100%' }}>
      <Header>
        <div style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '20px' }}>
          Todoapp
        </div>
      </Header>
      <Switch>
        <Redirect exact from='/' to='todo-groups' />
        <Route
          exact
          path='/auth'
          render={() => (
            signedIn
              ? <Redirect to='/todo-groups' />
              : <Auth />
          )}
        />
        <PrivateRoute path='/todo-groups/:groupId?' component={Todos} signedIn={signedIn} />
      </Switch>
    </Layout>
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
