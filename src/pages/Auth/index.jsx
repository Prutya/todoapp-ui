import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from 'pages/Auth/actions'
import Form from 'components/Form'
import Input from 'components/Input'
import Button from 'components/Button'
import FormGroup from 'components/FormGroup'
import FormLabel from 'components/FormLabel'
import Styled from './styled'

let Auth = ({ signIn, history, location }) => (
  <Styled>
    <Form onSubmit={(e) => {
      e.preventDefault()
      signIn(history, 'test', 'test')
    }}>
      <FormGroup style={{ width: '50%' }}>
        <FormLabel>Username</FormLabel>
        <Input style={{ width: '100%' }} />
      </FormGroup>
      <FormGroup style={{ width: '50%' }}>
        <FormLabel>Password</FormLabel>
        <Input style={{ width: '100%' }} />
      </FormGroup>
      <FormGroup>
        <Button>
          Sign in
        </Button>
      </FormGroup>
    </Form>
  </Styled>
)

Auth.propTypes = {
  signIn: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object
}

Auth = connect(
  (state, ownProps) => ({
    history: ownProps.history,
    location: ownProps.location
  }),
  { ...actions }
)(Auth)

Auth = withRouter(Auth)

export default Auth
