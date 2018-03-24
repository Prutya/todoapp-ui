import React from 'react'

const Group = ({ title, onClick, active }) => {
  const className = active ? 'group group--active' : 'group'

  return (
    <li onClick={onClick} className={className}>
      {title}
    </li>
  )
}

export default Group
