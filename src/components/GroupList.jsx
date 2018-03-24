import React from 'react'
import Group from './Group'

const GroupList = ({ groups, onGroupClick, isFetching }) => {
  if (isFetching) {
    return (
      <ul className='group-list'>
        <Spinner/>
      </ul>
    )
  }

  return (
    <ul className='group-list'>
      {groups.map(group =>
        <Group
          key={group.id}
          {...group}
          onClick={() => onGroupClick(group.id)}
        />
      )}
    </ul>
  )
}

export default GroupList
