import styled from 'styled-components'
import { clearFix } from 'polished'
import { colors } from 'styles'

export default styled.div`
  margin: auto;
  width: 324px;
  padding: 20px;
  margin-top: 120px;
  background-color: ${colors.sub2};
  ${clearFix()};
`
