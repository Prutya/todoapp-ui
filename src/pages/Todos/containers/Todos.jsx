import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as selectors from '../selectors'
import TodoList from '../components/TodoList'

let Todos = ({ visible, isFetching, errorMessage, currentGroupId, fetch, toggle }) => (
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

const mapStateToProps = (state) => {
  const { todos, groups } = state.todos

  return {
    visible: selectors.visibleTodos(state),
    currentGroupId: groups.idCurrent,
    isFetching: todos.isFetching,
    errorMessage: todos.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(actions.fetchTodos, dispatch),
  create: bindActionCreators(actions.createTodo, dispatch),
  toggle: bindActionCreators(actions.toggleTodo, dispatch)
})

Todos = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos)

export default Todos
