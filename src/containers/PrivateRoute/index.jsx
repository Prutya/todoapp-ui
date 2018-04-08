import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ signedIn, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      return signedIn
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />
    }}
  />
)

PrivateRoute.propTypes = {
  signedIn: PropTypes.bool,
  component: PropTypes.func,
  location: PropTypes.object
}

export default PrivateRoute
