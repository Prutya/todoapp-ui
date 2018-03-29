import React from 'react'
import { connect } from 'react-redux'
import GroupList from './GroupList'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import * as actions from '../actions'
import * as selectors from '../selectors'

class TodoApp extends React.Component {
  componentDidMount() {
    const { fetchGroups } = this.props

    fetchGroups()
  }

  render() {
    const {
      groups,
      allGroups,
      todos,
      fetchGroups,
      fetchTodos,
      toggleTodo,
      createTodo,
      selectGroup
    } = this.props

    const allTodos = todos.ids.map(id => todos.byId[id])
    const visibleTodos = allTodos.filter(todo => todo.todoGroupId === groups.idCurrent)

    return (
      <div className="todoapp">
        <GroupList
          groups={allGroups}
          errorMessage={groups.errorMessage}
          currentGroupId={groups.idCurrent}
          isFetching={groups.isFetching}
          onGroupClick={selectGroup}
          onErrorClick={fetchGroups}
        />

        <AddTodo
          groupId={groups.idCurrent}
          onAddClick={createTodo}
        />

        <TodoList
          todos={visibleTodos}
          onTodoClick={toggleTodo}
          onErrorClick={() => fetchTodos(groups.idCurrent)}
          errorMessage={todos.errorMessage}
          isFetching={todos.isFetching}
        />
      </div>
    )
  }
}

TodoApp = connect(
  state => ({
    ...state,
    allGroups: selectors.allGroups(state)
  }),
  actions
)(TodoApp)

export default TodoApp
