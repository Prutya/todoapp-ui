import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import TodoForm from '../../components/TodoForm'

let TodoFormContainer = ({ groupId, createTodo }) => (
  <TodoForm
    groupId={groupId}
    onAddClick={createTodo}
  />
)

TodoFormContainer.propTypes = {
  groupId: PropTypes.number,
  createTodo: PropTypes.func.isRequired
}

TodoFormContainer = connect(
  state => ({ groupId: state.todos.groups.idCurrent }),
  dispatch => ({
    createTodo: bindActionCreators(actions.createTodo, dispatch)
  })
)(TodoFormContainer)

export default TodoFormContainer
