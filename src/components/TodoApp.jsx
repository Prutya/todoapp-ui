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
      toggleTodo,
      createTodo,
      selectGroup
    } = this.props

    const allGroups = groups.ids.map(id => groups.byId[id])
    const allTodos = todos.ids.map(id => todos.byId[id])
    const visibleTodos = allTodos.filter(todo => todo.todoGroupId === groups.idCurrent)

    return (
      <div className="todoapp">
        <GroupList
          groups={allGroups}
          onGroupClick={(id) => {
            selectGroup(id)
            fetchTodos(id)
          }}
          onErrorClick={fetchGroups}
          errorMessage={groups.errorMessage}
          currentGroupId={groups.idCurrent}
          isFetching={groups.isFetching}
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
  state => ({ ...state }),
  actions
)(TodoApp)

export default TodoApp
