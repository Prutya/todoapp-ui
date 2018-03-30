import React from 'react'
import Todo from './Todo'
import SpinnerWrapper from './SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from './Message'

const TodoList = ({ todos, onTodoClick, isFetching, onErrorClick, errorMessage }) => {
  const wrapGutter = (gutter) => (
    <ul className='todo-list'>
      <SpinnerWrapper active={isFetching} paddingTop="120px"/>
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(null)
  }

  if (!!errorMessage) {
    return wrapGutter(
      <ErrorMessage
        onBtnClick={() => onErrorClick()}
        text={errorMessage}
      />
    )
  }

  if (!todos.length) {
    return wrapGutter(
      <NoDataMessage/>
    )
  }

  return wrapGutter(
    todos.map(todo =>
      <Todo
        key={todo.id}
        completed={todo.completed}
        onClick={() => onTodoClick(todo.id)}
      >
        {todo.title}
      </Todo>
    )
  )
}

export default TodoList
