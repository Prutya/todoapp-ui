import React from 'react'

const Spinner = ({ active }) => {
  const className = active ?
    'spinner-wrapper' :
    'spinner-wrapper spinner-wrapper--hidden'

  return (
    <div className={className}>
      <div className="spinner-cube-grid">
        <div className="spinner-cube spinner-cube1"></div>
        <div className="spinner-cube spinner-cube2"></div>
        <div className="spinner-cube spinner-cube3"></div>
        <div className="spinner-cube spinner-cube4"></div>
        <div className="spinner-cube spinner-cube5"></div>
        <div className="spinner-cube spinner-cube6"></div>
        <div className="spinner-cube spinner-cube7"></div>
        <div className="spinner-cube spinner-cube8"></div>
        <div className="spinner-cube spinner-cube9"></div>
      </div>
    </div>
  )
}

export default Spinner
