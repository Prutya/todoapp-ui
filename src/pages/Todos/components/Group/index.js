import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../../../styles'

const Group = styled.li`
  background-color: transparent;
  border-left-color: transparent;
  border-left-style: solid;
  border-left-width: 0;
  cursor: pointer;
  padding: 20px;
  transition: background-color 200ms ease-in-out,
              border-left-width 200ms ease-in-out,
              border-left-color 200ms ease-in-out;

  &:hover {
    background-color: ${colors.sub2Trans};
  }

  ${props => props.active && css`
    background-color: ${colors.sub2};
    border-left-color: ${colors.main};
    border-left-width: 5px;

    &:hover {
      background-color: ${colors.sub2};
    }
  `}
`

export default Group
