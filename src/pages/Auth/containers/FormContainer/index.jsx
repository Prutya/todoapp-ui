import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { get as _get } from 'lodash'

import * as actions from 'pages/Auth/actions'

import Form from 'components/Form'
import FormGroup from 'components/FormGroup'
import FormLabel from 'components/FormLabel'
import Button from 'components/Button'
import Input from 'components/Input'

class FormContainer extends React.Component {
  constructor (...args) {
    super(...args)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  render () {
    return (
      <Form onSubmit={(e) => this.handleSubmit(e)}>
        <FormGroup style={{ width: '50%' }} >
          <FormLabel>Username</FormLabel>
          <Input
            autoComplete='username'
            onChange={(e) => { this.setState({ username: e.target.value }) }}
            style={{ width: '100%' }}
          />
        </FormGroup>
        <FormGroup style={{ width: '50%' }} >
          <FormLabel>Password</FormLabel>
          <Input
            type='password'
            autoComplete='current-password'
            onChange={(e) => { this.setState({ password: e.target.value }) }}
            style={{ width: '100%' }}
          />
        </FormGroup>
        <FormGroup>
          <Button>Sign in</Button>
        </FormGroup>
      </Form>
    )
  }

  handleSubmit (e) {
    const { signIn, history, redirectPath } = this.props
    const { username, password } = this.state

    e.preventDefault()
    signIn(history, username, password, redirectPath)
  }
}

FormContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  redirectPath: PropTypes.string
}

// NOTE: using connect here, so
// eslint-disable-next-line no-class-assign
FormContainer = connect(
  (_, ownProps) => ({
    history: ownProps.history,
    // TODO: ???
    redirectPath: _get(ownProps, 'location.state.from.pathname')
  }),
  { ...actions }
)(FormContainer)

// NOTE: using withRouter here, so
// eslint-disable-next-line no-class-assign
FormContainer = withRouter(FormContainer)

export default FormContainer
