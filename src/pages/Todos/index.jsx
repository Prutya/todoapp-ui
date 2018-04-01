import React from 'react'
import Styled from './styled'
import GroupListContainer from './containers/GroupList'
import TodoFormContainer from './containers/TodoForm'
import TodoListContainer from './containers/TodoList'

const Todos = () => (
  <Styled>
    <GroupListContainer />
    <TodoFormContainer />
    <TodoListContainer />
  </Styled>
)

export default Todos
