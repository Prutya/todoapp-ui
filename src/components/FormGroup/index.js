import styled from 'styled-components'
import { clearFix } from 'polished'

const FormGroup = styled.div`
  float: left;
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  ${clearFix()}

  &:last-child {
    margin-bottom: 0;
  }
`

export default FormGroup
