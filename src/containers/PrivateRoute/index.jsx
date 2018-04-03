import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return user
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
    }}
  />
)

PrivateRoute.propTypes = {
  user: PropTypes.object,
  component: PropTypes.func,
  location: PropTypes.object
}

export default PrivateRoute
