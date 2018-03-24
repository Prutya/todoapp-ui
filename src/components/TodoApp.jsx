import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import * as groupActions from '../actions/groups'

class TodoApp extends React.Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentGroupId === prevProps.currentGroupId) {
      return
    }

    this.fetchData()
  }

  fetchData() {
    const { currentGroupId, fetchGroups } = this.props

    fetchGroups()
  }

  render() {
    const { groups, selectGroup, todos, toggleTodo } = this.props

    return (
      <main className="todoapp">
        <GroupList
          groups={groups}
          onGroupClick={selectGroup}
        />

        <TodoList
          todos={todos}
          onTodoClick={toggleTodo}
        />
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  groups: getGroups(state),
  todos: getTodos(state),
  isFetchingGroups: getIsFetchingGroups(state),
  isFetchingTodos: getIsFetchingTodos(state),
  currentGroupId: getCurrentGroupId(state)
})

TodoApp = connect({
  mapStateToProps,
  groupActions
})(TodoApp)

export default TodoApp
