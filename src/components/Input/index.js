import styled from 'styled-components'
import { colors } from 'styles'

const Input = styled.input`
  border: 3px solid ${colors.sub1};
  font-size: inherit;
  font-weight: inherit;
  float: left;
  outline: none;
  padding: 5px;
  transition: border-color 200ms ease-in-out;

  &:focus {
    border-color: ${colors.sub1Dark1}
  }
`

export default Input
