import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from 'pages/Auth/actions'
import Button from 'components/Button'

let Auth = ({ signIn, history, location }) => {
  let nameInput
  let passInput

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        signIn(history, nameInput.value, passInput.value, ((location.state || {}).from || {}).pathname)
      }}
    >
      <input ref={node => { nameInput = node }} type='text' autoComplete='username' />
      <input ref={node => { passInput = node }} type='password' autoComplete='current-password' />
      <Button>Sign in</Button>
    </form>
  )
}

Auth.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object
}

Auth = connect(
  (state, ownProps) => ({
    history: ownProps.history
  }),
  dispatch => ({
    signIn: bindActionCreators(actions.signIn, dispatch)
  })
)(Auth)

Auth = withRouter(Auth)

export default Auth
