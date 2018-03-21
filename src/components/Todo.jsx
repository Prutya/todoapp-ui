import React from 'react'

export const Todo = ({
  onClick,
  completed,
  title
}) => {
  return (
    <li onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}>
      {title}
    </li>
  )
}
