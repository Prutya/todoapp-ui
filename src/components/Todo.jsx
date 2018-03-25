import React from 'react'

const Todo = ({ onClick, completed, title }) => {
  const className = completed ? 'todo todo--completed' : 'todo'

  return (
    <li onClick={onClick} className={className}>
      {title}
    </li>
  )
}

export default Todo
