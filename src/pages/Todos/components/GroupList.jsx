import React from 'react'
import Group from './Group'
import SpinnerWrapper from './SpinnerWrapper'
import NoEntriesMessage from './NoEntriesMessage'
import ErrorMessage from './ErrorMessage'

const GroupList = ({
  groups,
  onGroupClick,
  onErrorClick,
  errorMessage,
  isFetching,
  currentGroupId
}) => {
  const wrapGutter = (gutter) => (
    <ul className='group-list'>
      <SpinnerWrapper active={isFetching} paddingTop="120px"/>
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(null)
  }

  if (!!errorMessage) {
    return wrapGutter(
      <ErrorMessage
        onBtnClick={() => onErrorClick()}
        text={errorMessage}
      />
    )
  }

  if (!groups.length) {
    return wrapGutter(
      <NoEntriesMessage/>
    )
  }

  return wrapGutter(
    groups.map(group =>
      <Group
        key={group.id}
        active={group.id === currentGroupId}
        onClick={() => onGroupClick(group.id)}
      >
        {group.title}
      </Group>
    )
  )
}

export default GroupList
