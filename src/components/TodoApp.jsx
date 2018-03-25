import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import * as actions from '../actions'

class TodoApp extends React.Component {
  componentDidMount() {
    const { fetchGroups } = this.props

    fetchGroups()
  }

  render() {
    const {
      groupIds,
      groupsById,
      todoIds,
      todosById,
      fetchTodos,
      isFetchingGroups,
      isFetchingTodos,
      toggleTodo,
      currentGroupId
    } = this.props

    return (
      <div className="todoapp">
        <GroupList
          groupIds={groupIds}
          groupsById={groupsById}
          onGroupClick={fetchTodos}
          currentGroupId={currentGroupId}
          isFetching={isFetchingGroups}
        />

        <TodoList
          todoIds={todoIds}
          todosById={todosById}
          onTodoClick={toggleTodo}
          isFetching={isFetchingTodos}
        />
      </div>
    )
  }
}

TodoApp = connect(
  (state) => (state),
  actions
)(TodoApp)

export default TodoApp
