import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Button, Form, Input } from 'antd'

import { signIn } from 'pages/Auth/actions'

class FormContainer extends React.Component {
  handleSubmit (e) {
    const { signIn, history, redirectPath, form } = this.props

    e.preventDefault()
    form.validateFields((error, values) => {
      const { username, password } = values

      if (!error) {
        signIn(history, username, password, redirectPath)
      }
    })
  }

  render () {
    const { getFieldDecorator } = this.props.form

    return (
      <Form
        onSubmit={(e) => this.handleSubmit(e)}
        style={{
          width: '300px',
          backgroundColor: 'white',
          padding: '20px',
          alignSelf: 'flex-start',
          marginTop: '120px',
          borderRadius: '4px'
        }}
      >
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please enter your username!' }]
          })(
            <Input
              autoComplete='username'
              placeholder='Username'
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please enter you password!' }]
          })(
            <Input
              type='password'
              autoComplete='current-password'
              placeholder='Password'
            />
          )}
        </Form.Item>
        <Form.Item style={{ marginBottom: '0' }}>
          <Button
            type='primary'
            htmlType='submit'
            style={{ width: '100%' }}
          >
            Sign in
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

FormContainer.propTypes = {
  signIn: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  redirectPath: PropTypes.string
}

// eslint-disable-next-line no-class-assign
FormContainer = connect(
  (_, ownProps) => ({
    form: ownProps.form,
    history: ownProps.history,
    // TODO: wtf ? :(
    redirectPath: (((ownProps.location || {}).state || {}).from || {}).pathname
  }),
  { signIn }
)(FormContainer)

// eslint-disable-next-line no-class-assign
FormContainer = withRouter(FormContainer)

// eslint-disable-next-line no-class-assign
FormContainer = Form.create()(FormContainer)

export default FormContainer
