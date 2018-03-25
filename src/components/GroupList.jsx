import React from 'react'
import Group from './Group'
import Spinner from './Spinner'

const GroupList = ({ groups, onGroupClick, isFetching, currentGroupId }) => {
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
          active={group.id === currentGroupId}
          {...group}
          onClick={() => onGroupClick(group.id)}
        />
      )}
    </ul>
  )
}

export default GroupList
