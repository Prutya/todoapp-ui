import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import { get as getToken } from 'services/auth'
import './styles/global'
import Root from 'containers/Root'

const store = configureStore()
const token = getToken()

if (token) {
  store.dispatch({
    type: 'AUTH_ALREADY_SIGNED_IN',
    jwt: token
  })
}

render(
  <Provider store={store}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
