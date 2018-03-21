import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { TodoApp } from './TodoApp'

const history = createBrowserHistory()

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={TodoApp} />
      </Router>
    </Provider>
  )
}
