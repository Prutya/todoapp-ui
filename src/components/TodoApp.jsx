import React from 'react'

import { AddTodo } from './AddTodo'
import { VisibleTodoList } from './VisibleTodoList'
import { Footer } from './Footer'
import { visibilityFilterConstants } from '../constants'

export const TodoApp = ({ match: { params } }) => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
