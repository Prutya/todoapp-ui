import styled from 'styled-components'
import { clearFix } from 'polished'

const Styled = styled.div`
  ${clearFix()}
  height: 100%;
  float: left;
  margin: auto;
  padding: 10px;
  width: calc(100% - 40px);
`

export default Styled
