import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { TodoApp } from './TodoApp'

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' component={TodoApp} />
      </Router>
    </Provider>
  )
}
