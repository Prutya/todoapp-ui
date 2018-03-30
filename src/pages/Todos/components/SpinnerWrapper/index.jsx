import React from 'react'
import Inner from './Inner'
import Spinner from '../Spinner'

const SpinnerWrapper = (props) => (
  <Inner {...props}>
    <Spinner/>
  </Inner>
)

export default SpinnerWrapper
