import styled, { css } from 'styled-components'
import { colors } from '../../../../styles'

const Inner = styled.div`
  background-color: ${colors.sub2Trans};
  height: 100%;
  left: 0;
  opacity: 0.00;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: opacity 200ms ease-in-out;
  width: 100%;

  ${props => props.paddingTop && css`
    padding-top: ${props.paddingTop};
  `}

  ${props => props.active && css`
    opacity: 1.00;
    pointer-events: auto;
  `}
`

export default Inner
