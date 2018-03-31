import React from 'react'
import PropTypes from 'prop-types'
import TodoList from '../components/TodoList'

const Todos = ({ visible, isFetching, errorMessage, currentGroupId, fetch, toggle }) => (
  <TodoList
    todos={visible}
    errorMessage={errorMessage}
    isFetching={isFetching}
    onTodoClick={toggle}
    onErrorClick={() => fetch(currentGroupId)}
  />
)

Todos.propTypes = {
  visible: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  currentGroupId: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}

export default Todos
