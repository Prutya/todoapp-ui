import React from 'react'
import PropTypes from 'prop-types'
import Inner from './Inner'
import Todo from '../Todo'
import SpinnerWrapper from '../SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from '../Message'

const TodoList = ({
  todos,
  onTodoClick,
  isFetching,
  onErrorClick,
  errorMessage
}) => {
  const wrap = (gutter) => (
    <Inner>
      <SpinnerWrapper active={isFetching} paddingTop='120px' />
      {gutter}
    </Inner>
  )

  if (isFetching) {
    return wrap(null)
  }

  if (errorMessage) {
    return wrap(
      <ErrorMessage
        onBtnClick={() => onErrorClick()}
        text={errorMessage}
      />
    )
  }

  if (!todos.length) {
    return wrap(
      <NoDataMessage />
    )
  }

  return wrap(
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
