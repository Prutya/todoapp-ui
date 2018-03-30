import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '../../../../styles'

const Button = styled.button`
  background-color: ${colors.main};
  border: none;
  color: ${colors.textAlt};
  cursor: pointer;
  font-size: inherit;
  font-weight: inherit;
  outline: none;
  padding: 10px;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${colors.mainLight1};
  }

  &:active {
    background-color: ${colors.mainLight2};
  }


  ${props => props.height && css`
    height: ${props.height};
  `}
  ${props => props.width && css`
    width: ${props.width};
  `}
`

export default Button
