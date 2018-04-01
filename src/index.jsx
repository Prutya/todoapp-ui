import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './styles/global'
import Root from './root'

render(
  <Provider store={configureStore()}>
    <Root />
  </Provider>,
  document.getElementById('root')
)
