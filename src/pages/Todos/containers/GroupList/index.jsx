import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Menu, Spin } from 'antd'

import * as actions from 'pages/Todos/actions'
import * as selectors from 'pages/Todos/selectors'

class GroupsList extends React.Component {
  componentDidMount () {
    const { fetch, token, history, match: { params } } = this.props

    fetch(token, history, params.groupId)
  }

  handleItemClick (e) {
    const { fetch, token, history, select } = this.props
    const { key } = e

    if (!key) {
      return
    }

    if (key === 'error-message') {
      return fetch(token, history)
    }

    select(token, parseInt(key), history)
  }

  render () {
    const {
      groups,
      groupFilter,
      isFetching,
      errorMessage
    } = this.props

    const wrap = (gutter) => (
      <Menu
        onClick={(e) => { this.handleItemClick(e) }}
        selectedKeys={[groupFilter]}
      >
        {gutter}
      </Menu>
    )

    if (isFetching) {
      return wrap(
        <Menu.Item>
          <Spin size='large' />
        </Menu.Item>
      )
    }

    if (errorMessage) {
      return wrap(
        <Menu.Item key='error-message'>
          {errorMessage}
        </Menu.Item>
      )
    }

    return wrap(
      groups.map(group =>
        <Menu.Item key={group.id.toString()}>
          {group.title}
        </Menu.Item>
      )
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
  select: PropTypes.func.isRequired
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
