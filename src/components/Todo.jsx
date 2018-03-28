import React from 'react'
import styled from 'styled-components'

const Todo = styled.li`
  padding: 20px;
  cursor: pointer;
  text-decoration: ${props => props.completed ? 'line-through' : 'none'}
`

export default Todo
