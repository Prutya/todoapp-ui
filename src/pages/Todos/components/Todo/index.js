import React from 'react'
import styled, { css } from 'styled-components'

const Todo = styled.li`
  padding: 20px;
  cursor: pointer;

  ${props => props.completed && css`
    text-decoration: line-through;
  `}
`

export default Todo
