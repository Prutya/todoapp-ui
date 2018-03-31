import React from 'react'
import PropTypes from 'prop-types'
import Group from './Group'
import SpinnerWrapper from './SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from './Message'

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
      <SpinnerWrapper active={isFetching} paddingTop='120px' />
      {gutter}
    </ul>
  )

  if (isFetching) {
    return wrapGutter(null)
  }

  if (errorMessage) {
    return wrapGutter(
      <ErrorMessage
        onBtnClick={() => onErrorClick()}
        text={errorMessage}
      />
    )
  }

  if (!groups.length) {
    return wrapGutter(
      <NoDataMessage />
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

GroupList.propTypes = {
  groups: PropTypes.array.isRequired,
  onGroupClick: PropTypes.func.isRequired,
  onErrorClick: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  currentGroupId: PropTypes.number
}

export default GroupList
