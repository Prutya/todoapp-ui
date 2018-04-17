import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List } from 'antd'

import * as actions from 'pages/Todos/actions'
import * as selectors from 'pages/Todos/selectors'

let TodoList = ({
  token,
  todos,
  currentGroupId,
  isFetching,
  errorMessage,
  fetch,
  toggle,
  destroy
}) => (
  <List
    bordered
    loading={isFetching}
    dataSource={todos}
    renderItem={item =>
      <List.Item
        style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
        onClick={() => toggle(token, item.id)}
      >
        { item.title }
      </List.Item>
    }
  />
)

TodoList.propTypes = {
  token: PropTypes.string,
  todos: PropTypes.array.isRequired,
  currentGroupId: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  fetch: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  destroy: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { todos, groups } = state.todos

  return {
    token: state.auth.token,
    todos: selectors.visibleTodos(state),
    currentGroupId: groups.idCurrent,
    isFetching: todos.isFetching,
    errorMessage: todos.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(actions.fetchTodos, dispatch),
  toggle: bindActionCreators(actions.toggleTodo, dispatch),
  destroy: bindActionCreators(actions.destroyTodo, dispatch)
})

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoList
