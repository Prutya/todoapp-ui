import styled, { keyframes } from 'styled-components'
import { colors } from '../../../../styles'

const animation = keyframes`
  0%, 70%, 100% {
    transform: scale3D(1, 1, 1);
  }

  35% {
    transform: scale3D(0, 0, 1);
  }
`

const Item = styled.div`
  animation: ${animation} 1s infinite ease-in-out;
  animation-delay: ${props => props.delay}ms;
  background-color: ${colors.main};
  float: left;
  height: 33.3333%;
  width: 33.3333%;
`

export default Item
