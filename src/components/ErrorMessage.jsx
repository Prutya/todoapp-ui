import React from 'react'

const ErrorMessage = ({ text, onBtnClick }) => {
  const message = text || 'Something went wrong.'

  return (
    <div className='error-message'>
      <span className='error-message__text'>
        {`There was an error. ${message}`}
      </span>
      <button
        onClick={ () => onBtnClick() }
        className='error-message__btn'
      >
        Retry
      </button>
    </div>
  )
}

export default ErrorMessage
