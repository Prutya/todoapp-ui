import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { TodoList } from './TodoList'
import { visibilityFilterConstants } from '../constants'
import { todosActions } from '../actions'

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

const mapStateToProps = (state, { match: { params } }) => {
  return {
    todos: getVisibleTodos(
      state.todos,
      params.filter || visibilityFilterConstants.SHOW_ALL
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(todosActions.toggle(id))
    }
  }
}

export const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList))
