import React from 'react'
import PropTypes from 'prop-types'
import Styled from './styled'
import GroupListContainer from './containers/GroupList'
import TodoFormContainer from './containers/TodoForm'
import TodoListContainer from './containers/TodoList'

const Todos = ({ match: { params } }) => (
  <Styled>
    <GroupListContainer groupFilter={params.groupId} />
    <TodoFormContainer />
    <TodoListContainer />
  </Styled>
)

Todos.propTypes = {
  match: PropTypes.object
}

export default Todos
