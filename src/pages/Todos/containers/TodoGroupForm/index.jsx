import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { createTodoGroup } from 'pages/Todos/actions'
import TodoGroupForm from 'pages/Todos/components/TodoGroupForm'

let TodoGroupFormContainer = ({ token, isShowingCreateModal, createTodoGroup }) => (
  <TodoGroupForm
    showCreateModal={isShowingCreateModal}
    onAddClick={(text) => { createTodoGroup(token, text) }}
  />
)

TodoGroupFormContainer.propTypes = {
  token: PropTypes.string,
  isShowingCreateModal: PropTypes.bool.isRequired,
  createTodoGroup: PropTypes.func.isRequired
}

TodoGroupFormContainer = connect(
  state => ({
    token: state.auth.token,
    isShowingCreateModal: state.todos.groups.isShowingCreateModal
  }),
  { createTodoGroup }
)(TodoGroupFormContainer)

export default TodoGroupFormContainer
