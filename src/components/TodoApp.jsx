import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import * as actions from '../actions'

class TodoApp extends React.Component {
  componentDidMount() {
    this.props.fetchGroups()
  }

  render() {
    const {
      groups,
      todos,
      fetchTodos,
      isFetchingGroups,
      isFetchingTodos,
      toggleTodo,
      currentGroupId
    } = this.props

    return (
      <div className="todoapp">
        <GroupList
          groups={groups}
          onGroupClick={fetchTodos}
          currentGroupId={currentGroupId}
          isFetching={isFetchingGroups}
        />

        <TodoList
          todos={todos}
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
