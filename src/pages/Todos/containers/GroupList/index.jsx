import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import * as actions from 'pages/Todos/actions'
import * as selectors from 'pages/Todos/selectors'
import Styled from './Styled'
import Group from 'pages/Todos/components/Group'
import SpinnerWrapper from 'pages/Todos/components/SpinnerWrapper'
import { ErrorMessage, NoDataMessage } from 'pages/Todos/components/Message'

import Button from 'components/Button'

class GroupsList extends React.Component {
  componentDidMount () {
    const { fetch, token, history, match: { params } } = this.props

    fetch(token, history, params.groupId)
  }

  render () {
    const { token, history, groups, groupFilter, isFetching, errorMessage, fetch, select } = this.props

    if (isFetching) {
      return this.wrap(null)
    }

    if (errorMessage) {
      return this.wrap(
        <ErrorMessage
          onBtnClick={() => fetch(token, history)}
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
          active={group.id === parseInt(groupFilter)}
          onClick={() => select(token, group.id, history)}
        >
          {group.title}
        </Group>
      )
    )
  }

  wrap (gutter) {
    const { isFetching, showCreateModal } = this.props

    return (
      <Styled>
        <div style={{ padding: '20px' }}>
          <Button
            style={{ width: '100%' }}
            onClick={() => {
              showCreateModal(true)
            }}
          >
            Add
          </Button>
        </div>
        <SpinnerWrapper active={isFetching} paddingTop='120px' />
        {gutter}
      </Styled>
    )
  }
}

GroupsList.propTypes = {
  token: PropTypes.string,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  groups: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  groupFilter: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  fetch: PropTypes.func.isRequired,
  select: PropTypes.func.isRequired,
  showCreateModal: PropTypes.func.isRequired
}

const mapStateToProps = (state, ownProps) => ({
  token: state.auth.token,
  history: ownProps.history,
  groups: selectors.allGroups(state),
  groupFilter: ownProps.groupFilter,
  isFetching: state.todos.groups.isFetching,
  errorMessage: state.todos.groups.errorMessage
})

const mapDispatchToProps = (dispatch) => ({
  fetch: bindActionCreators(actions.fetchGroups, dispatch),
  select: bindActionCreators(actions.selectGroup, dispatch),
  showCreateModal: bindActionCreators(actions.showTodoGroupModal, dispatch)
})

// NOTE: using connect here, so
// eslint-disable-next-line no-class-assign
GroupsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupsList)

// NOTE: using withRouter here, so
// eslint-disable-next-line no-class-assign
GroupsList = withRouter(GroupsList)

export default GroupsList
