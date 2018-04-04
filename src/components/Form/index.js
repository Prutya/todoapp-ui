import styled from 'styled-components'
import { clearFix } from 'polished'
import { colors } from 'styles'

const Styled = styled.form`
  padding: 20px;
  background-color: ${colors.sub2};
  ${clearFix()}
`

export default Styled
