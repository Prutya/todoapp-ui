import styled from 'styled-components'
import { clearFix } from 'polished'
import { colors } from '../../../../styles'

const Inner = styled.div`
  background-color: ${colors.sub2};
  float: left;
  height: 58px;
  padding: 10px;
  width: 80%;
  ${clearFix()};
`

export default Inner
