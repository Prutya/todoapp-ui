import React from 'react'
import styled from 'styled-components'
import { colors } from '../../../styles'

const Group = styled.li`
  background-color: ${props => props.active ? colors.sub2 : 'transparent'};
  border-left-width: ${props => props.active ? '5px' : '0'};
  border-left-style: solid;
  border-left-color: ${props => props.active ? colors.main : 'transparent'};
  cursor: pointer;
  padding: 20px;
  transition: background-color 200ms ease-in-out,
              border-left-width 200ms ease-in-out,
              border-left-color 200ms ease-in-out;

  &:hover {
    background-color: ${props => props.active ? colors.sub2 : colors.sub2Trans};
  }
`

export default Group
