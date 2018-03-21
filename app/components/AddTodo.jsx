import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todosActions }   from '../actions'

export let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        dispatch(todosActions.create(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)
