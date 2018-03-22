import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from './TodoList'
import { visibilityFilterConstants } from '../constants'
import * as actions from '../actions/todos'
import { getVisibleTodos } from '../reducers'
import { fetchTodos } from '../api'

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
    const { filter, receiveTodos } = this.props

    fetchTodos(filter).then((todos) => {
      receiveTodos(filter, todos)
    })
  }

  render() {
    const { toggleTodo, ...rest } = this.props

    return (
      <TodoList
        {...rest}
        onTodoClick={toggleTodo}
      />
    )
  }
}

const mapStateToProps = (state, { match: { params } }) => {
  const filter = params.filter || visibilityFilterConstants.SHOW_ALL
  return {
    todos: getVisibleTodos(state, filter),
    filter,
  }
}

VisibleTodoList = withRouter(connect(
  mapStateToProps,
  actions
)(VisibleTodoList))

export default VisibleTodoList
