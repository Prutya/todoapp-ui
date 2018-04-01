import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import * as selectors from '../../selectors'
import Styled from './Styled'
import Todo from '../../components/Todo'
import SpinnerWrapper from '../../components/SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from '../../components/Message'

let TodoList = ({
  todos,
  currentGroupId,
  isFetching,
  errorMessage,
  fetch,
  toggle
}) => {
  const wrap = (gutter) => (
    <Styled>
      <SpinnerWrapper active={isFetching} paddingTop='120px' />
      {gutter}
    </Styled>
  )

  if (isFetching) {
    return wrap(null)
  }

  if (errorMessage) {
    return wrap(
      <ErrorMessage
        onBtnClick={() => fetch(currentGroupId)}
        text={errorMessage}
      />
    )
  }

  if (!todos.length) {
    return wrap(
      <NoDataMessage />
    )
  }

  return wrap(
    todos.map(todo =>
      <Todo
        key={todo.id}
        completed={todo.completed}
        onClick={() => toggle(todo.id)}
      >
        {todo.title}
      </Todo>
    )
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  currentGroupId: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  fetch: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  const { todos, groups } = state.todos

  return {
    todos: selectors.visibleTodos(state),
    currentGroupId: groups.idCurrent,
    isFetching: todos.isFetching,
    errorMessage: todos.errorMessage
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(actions.fetchTodos, dispatch),
  toggle: bindActionCreators(actions.toggleTodo, dispatch)
})

TodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default TodoList
