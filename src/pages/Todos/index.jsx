import React from 'react'
import Styled from './styled'
import GroupsContainer from './containers/Groups'
import TodosContainer from './containers/Todos'
import TodoFormContainer from './containers/TodoForm'

const Todos = () => (
  <Styled>
    <GroupsContainer />
    <TodoFormContainer />
    <TodosContainer />
  </Styled>
)

export default Todos
