import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import * as actions from '../actions'

class TodoApp extends React.Component {
  componentDidMount() {
    const { fetchGroups } = this.props

    fetchGroups()
  }

  render() {
    const {
      groups,
      todos,
      fetchGroups,
      fetchTodos,
      isFetchingGroups,
      isFetchingTodos,
      toggleTodo,
      createTodo,
      currentGroupId,
      groupsErrorMessage,
      todosErrorMessage
    } = this.props

    return (
      <div className="todoapp">
        <GroupList
          groups={groups}
          onGroupClick={fetchTodos}
          onErrorClick={fetchGroups}
          errorMessage={groupsErrorMessage}
          currentGroupId={currentGroupId}
          isFetching={isFetchingGroups}
        />

        <AddTodo
          groupId={currentGroupId}
          onAddClick={createTodo}
        />

        <TodoList
          todos={todos}
          onTodoClick={toggleTodo}
          onErrorClick={() => fetchTodos(currentGroupId)}
          errorMessage={todosErrorMessage}
          isFetching={isFetchingTodos}
        />
      </div>
    )
  }
}

TodoApp = connect(
  (state) => ({
    ...state,
    groups: state.groupIds.map(id => state.groupsById[id]),
    todos: ((state.groupsById[state.currentGroupId] || {}).todoIds || []).map(id => state.todosById[id])
  }),
  actions
)(TodoApp)

export default TodoApp
