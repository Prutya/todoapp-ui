import styled from 'styled-components'
import { clearFix } from 'polished'

const Styled = styled.div`
  ${clearFix()}
  height: 100%;
  margin: auto;
  padding: 10px;
  width: calc(100% - 40px);
  float: left;
`

export default Styled
