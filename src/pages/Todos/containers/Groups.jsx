import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../actions'
import * as selectors from '../selectors'
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

const mapStateToProps = (state) => ({
  all: selectors.allGroups(state),
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
Groups = connect(
  mapStateToProps,
  mapDispatchToProps
)(Groups)

export default Groups
