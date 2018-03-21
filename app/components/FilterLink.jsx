import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Link } from './Link'

import { visibilityFilterConstants } from '../constants'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch({
        type: visibilityFilterConstants.SET,
        filter: ownProps.filter
      })
    }
  }
}

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
