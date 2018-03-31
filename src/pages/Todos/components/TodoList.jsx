import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import SpinnerWrapper from './SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from './Message'

const TodoList = ({
  todos,
  onTodoClick,
  isFetching,
  onErrorClick,
  errorMessage
}) => {
  const wrapGutter = (gutter) => (
    <ul className='todo-list'>
      <SpinnerWrapper active={isFetching} paddingTop='120px' />
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(null)
  }

  if (errorMessage) {
    return wrapGutter(
      <ErrorMessage
        onBtnClick={() => onErrorClick()}
        text={errorMessage}
      />
    )
  }

  if (!todos.length) {
    return wrapGutter(
      <NoDataMessage />
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

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onErrorClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string
}

export default TodoList
