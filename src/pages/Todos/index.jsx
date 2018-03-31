import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import * as selectors from './selectors'
import GroupsContainer from './containers/Groups'
import TodosContainer from './containers/Todos'
import TodoForm from './components/TodoForm'

let Todos = ({ groups, todos }) => (
  <div className='todoapp'>
    <GroupsContainer {...groups} />
    <TodoForm
      groupId={groups.idCurrent}
      onAddClick={todos.create}
    />
    <TodosContainer {...todos} />
  </div>
)

Todos.propTypes = {
  groups: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  const scopedState = state.todos

  return {
    groups: {
      all: selectors.allGroups(state),
      idCurrent: scopedState.groups.idCurrent,
      isFetching: scopedState.groups.isFetching,
      errorMessage: scopedState.groups.errorMessage
    },
    todos: {
      visible: selectors.visibleTodos(state),
      currentGroupId: scopedState.groups.idCurrent,
      isFetching: scopedState.todos.isFetching,
      errorMessage: scopedState.todos.errorMessage
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  groups: {
    fetch: bindActionCreators(actions.fetchGroups, dispatch),
    select: bindActionCreators(actions.selectGroup, dispatch)
  },
  todos: {
    fetch: bindActionCreators(actions.fetchTodos, dispatch),
    create: bindActionCreators(actions.createTodo, dispatch),
    toggle: bindActionCreators(actions.toggleTodo, dispatch)
  }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  groups: {
    ...stateProps.groups,
    ...dispatchProps.groups
  },
  todos: {
    ...stateProps.todos,
    ...dispatchProps.todos
  }
})

Todos = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(Todos)

export default Todos
