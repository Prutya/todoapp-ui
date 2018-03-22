import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import TodoList from './TodoList'
import { visibilityFilterConstants } from '../constants'
import { todosActions } from '../actions'
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
    const { filter, receive } = this.props

    fetchTodos(filter).then((todos) => {
      receive(filter, todos)
    })
  }

  render() {
    const { toggle, ...rest } = this.props

    return (
      <TodoList
        {...rest}
        onTodoClick={toggle}
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
  todosActions
)(VisibleTodoList))

export default VisibleTodoList
