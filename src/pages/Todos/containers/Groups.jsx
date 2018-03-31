import React from 'react'
import PropTypes from 'prop-types'
import GroupList from '../components/GroupList'

class Groups extends React.Component {
  componentDidMount () {
    this.props.fetch()
  }

  render () {
    const { all, idCurrent, isFetching, errorMessage, fetch, select } = this.props

    return (
      <GroupList
        groups={all}
        errorMessage={errorMessage}
        currentGroupId={idCurrent}
        isFetching={isFetching}
        onGroupClick={select}
        onErrorClick={fetch}
      />
    )
  }
}

Groups.propTypes = {
  all: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  idCurrent: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired
}

export default Groups
