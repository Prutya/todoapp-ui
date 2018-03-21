import { connect } from 'react-redux'

import { TodoList } from './TodoList'
import { todosConstants, visibilityFilterConstants } from '../constants'

const getVisibleTodos = (
  todos,
  filter
) => {
  switch (filter) {
    case visibilityFilterConstants.SHOW_ALL:
      return todos
    case visibilityFilterConstants.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case visibilityFilterConstants.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      return todos
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      state.visibilityFilter
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch({
        type: todosConstants.TOGGLE,
        id
      })
    }
  }
}

export const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)