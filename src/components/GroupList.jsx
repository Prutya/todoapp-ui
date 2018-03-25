import React from 'react'
import Group from './Group'
import Spinner from './Spinner'
import NoEntriesMessage from './NoEntriesMessage'

const GroupList = ({ groupIds, groupsById, onGroupClick, isFetching, currentGroupId }) => {
  const wrapGutter = (gutter) => (
    <ul className='group-list'>
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(
      <Spinner/>
    )
  }

  if (!groupIds.length) {
    return wrapGutter(
      <NoEntriesMessage/>
    )
  }

  const groups = groupIds.map(id => groupsById[id])

  return wrapGutter(
    groups.map(group =>
      <Group
        key={group.id}
        active={group.id === currentGroupId}
        {...group}
        onClick={() => onGroupClick(group.id)}
      />
    )
  )
}

export default GroupList
