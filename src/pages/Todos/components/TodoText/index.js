import styled, { css } from 'styled-components'

export default styled.span`
  cursor: pointer;
  
  ${props => props.striked && css`
    text-decoration: line-through;
  `}
`
