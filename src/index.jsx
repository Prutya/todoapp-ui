import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import 'antd/dist/antd.css'

import configureStore from './store'
import Root from 'containers/Root'

const store = configureStore()
const token = localStorage.getItem('jwt')

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
