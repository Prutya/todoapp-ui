import styled from 'styled-components'
import { colors } from 'styles'

export default styled.a`
  color: ${colors.text};
  cursor: pointer;
  display: inline-block;
  float: left;
  margin-bottom: 5px;
  transition: color 200ms ease-in-out;
  width: 100%;

  &:hover {
    color: ${colors.mainLight1};
  }

  &:active {
    color: ${colors.mainLight2};
  }
`
