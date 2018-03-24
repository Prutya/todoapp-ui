import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick, isFetching }) => {
  if (isFetching && !todos.length) {
    return (
      <ul className="todo-list">
        <Spinner/>
      </ul>
    )
  }

  return (
    <ul className="todo-list">
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
    </ul>
  )
}

export default TodoList
