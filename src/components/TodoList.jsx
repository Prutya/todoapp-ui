import React from 'react'
import Todo from './Todo'
import Spinner from './Spinner'
import NoEntriesMessage from './NoEntriesMessage'

const TodoList = ({ todoIds, todosById, onTodoClick, isFetching }) => {
  const wrapGutter = (gutter) => (
    <ul className='todo-list'>
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(
      <Spinner/>
    )
  }

  if (!todoIds.length) {
    return wrapGutter(
      <NoEntriesMessage/>
    )
  }

  const todos = todoIds.map(id => todosById[id])

  return wrapGutter(
    todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )
  )
}

export default TodoList
