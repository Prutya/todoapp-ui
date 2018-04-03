import React from 'react'
import PropTypes from 'prop-types'
import Button from 'components/Button'
import Inner from './Inner'
import Text from './Text'

export const NoDataMessage = () => (
  <Inner>
    <Text>
      No data available
    </Text>
  </Inner>
)

export const ErrorMessage = ({ onBtnClick, message }) => {
  const displayMessage = message || 'Something went wrong'

  return (
    <Inner>
      <Text>
        {`${displayMessage}.`}
      </Text>
      <Button onClick={onBtnClick}>
        Retry
      </Button>
    </Inner>
  )
}

ErrorMessage.propTypes = {
  onBtnClick: PropTypes.func,
  message: PropTypes.string
}
