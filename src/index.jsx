import React from 'react'
import { render } from 'react-dom'
import Root from './components/Root'
import configureStore from './store/configureStore'
import styles from './styles-scss'

render(
  <Root store={configureStore()} />,
  document.getElementById('root')
)
