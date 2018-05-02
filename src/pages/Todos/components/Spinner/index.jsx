import React from 'react'
import Inner from './Inner'
import Item from './Item'

const delays = [
  0, 100, 200,
  200, 100, 0,
  0, 100, 200
]

const Spinner = () => (
  <Inner>
    {delays.map((delay, index) =>
      <Item key={index} delay={delay} />
    )}
  </Inner>
)

export default Spinner
