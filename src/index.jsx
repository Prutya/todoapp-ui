import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import './styles/global'
import Todos from './pages/Todos'

render(
  <Provider store={configureStore()}>
    <Todos />
  </Provider>,
  document.getElementById('root')
)
