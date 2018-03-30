import React from 'react'
import Button from './Button'

const ErrorMessage = ({ text, onBtnClick }) => {
  const message = text || 'Something went wrong.'

  return (
    <div className='error-message'>
      <span className='error-message__text'>
        {`${message}.`}
      </span>
      <Button onClick={onBtnClick}>
        Retry
      </Button>
    </div>
  )
}

export default ErrorMessage
