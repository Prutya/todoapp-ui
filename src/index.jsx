import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
// TODO: is there a way to include this from webpack?
// eslint-disable-next-line no-unused-vars
import styles from './styles-scss'
import Todos from './pages/Todos'

render(
  <Provider store={configureStore()}>
    <Todos />
  </Provider>,
  document.getElementById('root')
)
