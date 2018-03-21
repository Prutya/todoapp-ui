import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'

import { TodoApp } from './components'
import { store } from './storeConfig'

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('root')
)
