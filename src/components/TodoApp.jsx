import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import * as actions from '../actions'

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
    const { groups, selectGroup, todos, toggleTodo, isFetchingGroups } = this.props

    return (
      <div className="todoapp">
        <GroupList
          groups={groups}
          onGroupClick={selectGroup}
          isFetching={isFetchingGroups}
        />

        <TodoList
          todos={todos}
          onTodoClick={toggleTodo}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  groups: state.groups,
  todos: state.todos,
  isFetchingGroups: state.isFetchingGroups
})

TodoApp = connect(
  mapStateToProps,
  actions
)(TodoApp)

export default TodoApp
