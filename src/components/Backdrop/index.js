import styled, { css } from 'styled-components'
import { colors } from 'styles'

export default styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.backdrop};
  opacity: 0;
  pointer-events: none;
  transition: opacity 200ms ease-in-out;

  ${props => props.active && css`
    opacity: 1;
    pointer-events: auto;
  `}
`
