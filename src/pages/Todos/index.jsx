import React from 'react'
import GroupsContainer from './containers/Groups'
import TodosContainer from './containers/Todos'
import TodoFormContainer from './containers/TodoForm'

const Todos = () => (
  <div className='todoapp'>
    <GroupsContainer />
    <TodoFormContainer />
    <TodosContainer />
  </div>
)

export default Todos
