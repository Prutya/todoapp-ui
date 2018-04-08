import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import FaGithub from 'react-icons/lib/fa/github'
import FaSignOut from 'react-icons/lib/fa/sign-out'

import Nav from 'components/Nav'
import NavLink from 'components/NavLink'
import { signOut } from 'pages/Auth/actions'

let NavContainer = ({ signedIn, history, signOut }) => (
  <Nav>
    <NavLink href='https://github.com/Prutya/todoapp-ui' target='_blank'>
      <FaGithub />
    </NavLink>
    { signedIn && (
      <NavLink onClick={() => signOut(history)}>
        <FaSignOut />
      </NavLink>
    )}
  </Nav>
)

NavContainer.propTypes = {
  signedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  signOut: PropTypes.func.isRequired
}

NavContainer = connect(
  (state, ownProps) => ({
    signedIn: !!state.auth.token,
    history: ownProps.history
  }),
  { signOut }
)(NavContainer)

NavContainer = withRouter(NavContainer)

export default NavContainer
