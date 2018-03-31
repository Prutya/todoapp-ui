import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from './actions'
import * as selectors from './selectors'
import GroupList from './components/GroupList'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

class Todos extends React.Component {
  componentDidMount () {
    const { fetchGroups } = this.props

    fetchGroups()
  }

  render () {
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
      <div className='todoapp'>
        <GroupList
          groups={allGroups}
          errorMessage={groups.errorMessage}
          currentGroupId={groups.idCurrent}
          isFetching={groups.isFetching}
          onGroupClick={selectGroup}
          onErrorClick={fetchGroups}
        />

        <TodoForm
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

Todos.propTypes = {
  groups: PropTypes.object.isRequired,
  allGroups: PropTypes.array.isRequired,
  todos: PropTypes.object.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  fetchGroups: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired,
  selectGroup: PropTypes.func.isRequired
}

// NOTE: using connect() here, so
// eslint-disable-next-line no-class-assign
Todos = connect(
  state => ({
    ...state.todos,
    allGroups: selectors.allGroups(state)
  }),
  actions
)(Todos)

export default Todos
