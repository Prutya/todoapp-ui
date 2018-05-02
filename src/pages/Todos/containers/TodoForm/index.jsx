import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import TodoForm from '../../components/TodoForm'

let TodoFormContainer = ({ token, groupId, createTodo }) => (
  <TodoForm
    groupId={groupId}
    onAddClick={(text) => { createTodo(token, groupId, text) }}
  />
)

TodoFormContainer.propTypes = {
  token: PropTypes.string,
  groupId: PropTypes.number,
  createTodo: PropTypes.func.isRequired
}

TodoFormContainer = connect(
  state => ({
    token: state.auth.token,
    groupId: state.todos.groups.idCurrent
  }),
  dispatch => ({
    createTodo: bindActionCreators(actions.createTodo, dispatch)
  })
)(TodoFormContainer)

export default TodoFormContainer
