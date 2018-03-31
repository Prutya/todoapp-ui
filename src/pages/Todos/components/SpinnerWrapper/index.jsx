import React from 'react'
import PropTypes from 'prop-types'
import Inner from './Inner'
import Spinner from '../Spinner'

const SpinnerWrapper = ({ active, paddingTop }) => (
  <Inner active={active} paddingTop={paddingTop}>
    <Spinner />
  </Inner>
)

SpinnerWrapper.propTypes = {
  active: PropTypes.bool.isRequired,
  paddingTop: PropTypes.string
}

export default SpinnerWrapper
