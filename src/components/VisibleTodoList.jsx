import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from './TodoList'
import { visibilityFilterConstants } from '../constants'
import * as actions from '../actions/todos'
import { getVisibleTodos, getIsFetching } from '../reducers'

class VisibleTodoList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { filter, requestTodos, fetchTodos } = this.props
    requestTodos(filter)
    fetchTodos(filter)
  }

  render() {
    const { toggleTodo, todos, isFetching } = this.props

    if (isFetching && !todos.length) {
      return (
        <p>Loading...</p>
      )
    }

    return (
      <TodoList
        todos={todos}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || visibilityFilterConstants.SHOW_ALL
  return {
    todos: getVisibleTodos(state, filter),
    isFetching: getIsFetching(state, filter),
    filter,
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
