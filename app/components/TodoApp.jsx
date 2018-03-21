import React from 'react'

import { AddTodo } from './AddTodo.jsx'
import { VisibleTodoList } from './VisibleTodoList'
import { Footer } from './Footer'

export const TodoApp = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  )
}
