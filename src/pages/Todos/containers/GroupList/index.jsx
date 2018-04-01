import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../../actions'
import * as selectors from '../../selectors'
import Styled from './Styled'
import Group from '../../components/Group'
import SpinnerWrapper from '../../components/SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from '../../components/Message'

class GroupsList extends React.Component {
  componentDidMount () {
    this.props.fetch()
  }

  render () {
    const { groups, idCurrent, isFetching, errorMessage, fetch, select } = this.props

    if (isFetching) {
      return this.wrap(null)
    }

    if (errorMessage) {
      return this.wrap(
        <ErrorMessage
          onBtnClick={fetch}
          text={errorMessage}
        />
      )
    }

    if (!groups.length) {
      return this.wrap(
        <NoDataMessage />
      )
    }

    return this.wrap(
      groups.map(group =>
        <Group
          key={group.id}
          active={group.id === idCurrent}
          onClick={() => select(group.id)}
        >
          {group.title}
        </Group>
      )
    )
  }

  wrap (gutter) {
    const { isFetching } = this.props

    return (
      <Styled>
        <SpinnerWrapper active={isFetching} paddingTop='120px' />
        {gutter}
      </Styled>
    )
  }
}

GroupsList.propTypes = {
  groups: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  idCurrent: PropTypes.number,
  isFetching: PropTypes.bool.isRequired,
  select: PropTypes.func.isRequired,
  fetch: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  groups: selectors.allGroups(state),
  idCurrent: state.todos.groups.idCurrent,
  isFetching: state.todos.groups.isFetching,
  errorMessage: state.todos.groups.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(actions.fetchGroups, dispatch),
  select: bindActionCreators(actions.selectGroup, dispatch)
})

// NOTE: using connect here, so
// eslint-disable-next-line no-class-assign
GroupsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsList)

export default GroupsList
