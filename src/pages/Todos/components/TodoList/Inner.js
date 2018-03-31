import styled from 'styled-components'
import { colors } from 'styles'

const Inner = styled.ul`
  background-color: ${colors.sub2};
  float: left;
  height: calc(100% - 58px);
  overflow-y: scroll;
  position: relative;
  width: 80%;
`

export default Inner
