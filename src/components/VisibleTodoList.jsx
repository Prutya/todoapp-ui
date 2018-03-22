import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from './TodoList'
import { visibilityFilterConstants } from '../constants'
import { todosActions } from '../actions'
import { getVisibleTodos } from '../reducers'

const mapStateToProps = (state, { match: { params } }) => {
  return {
    todos: getVisibleTodos(
      state,
      params.filter || visibilityFilterConstants.SHOW_ALL
    )
  }
}

const VisibleTodoList = withRouter(connect(
  mapStateToProps,
  { onTodoClick: todosActions.toggle }
)(TodoList))

export default VisibleTodoList
