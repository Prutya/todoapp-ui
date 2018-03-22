import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        dispatch(createTodo(input.value))
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo
