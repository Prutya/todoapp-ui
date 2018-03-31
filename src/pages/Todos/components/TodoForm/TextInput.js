import styled from 'styled-components'
import { colors } from 'styles'

const TextInput = styled.input`
  border: 3px solid ${colors.sub1};
  font-size: inherit;
  font-weight: inherit;
  float: left;
  height: 100%;
  outline: none;
  padding: 16px 10px;
  transition: border-color 200ms ease-in-out;
  width: 80%;

  &:focus {
    border-color: ${colors.sub1Dark1}
  }
`

export default TextInput
