import React from 'react'
import Todo from './Todo'
import Spinner from './Spinner'
import NoEntriesMessage from './NoEntriesMessage'

const TodoList = ({ todos, onTodoClick, isFetching }) => {
  const wrapGutter = (gutter) => (
    <ul className='todo-list'>
      <Spinner active={isFetching}/>
      {gutter}
    </ul>
  )
  
  if (isFetching) {
    return wrapGutter(null)
  }

  if (!todos.length) {
    return wrapGutter(
      <NoEntriesMessage/>
    )
  }

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
