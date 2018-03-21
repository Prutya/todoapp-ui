import React from 'react'
import { Provider } from 'react-redux'

import { TodoApp } from './TodoApp'

export const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}
