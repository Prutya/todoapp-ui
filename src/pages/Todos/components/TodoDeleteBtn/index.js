import styled from 'styled-components'
import Todo from 'pages/Todos/components/Todo/styled'
import { colors } from 'styles'

export default styled.button`
  display: inline-block;
  opacity: 0.35;
  float: right;
  font-size: inherit;
  padding: 0;
  margin: 0;
  border: none;
  color: ${colors.text};
  cursor: pointer;
  transition: opacity 200ms ease-in-out,
              color 200ms ease-in-out;

  &:hover {
    color: ${colors.mainLight1}
  }

  ${Todo}:hover & {
    opacity: 1;
  }
`
