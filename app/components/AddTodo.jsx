import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { todosConstants } from '../constants'

let nextTodoId = 0

export let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        dispatch({
          type: todosConstants.CREATE,
          title: input.value,
          id: nextTodoId++
        })
        input.value = ''
      }}>
        Add Todo
      </button>
    </div>
  )
}

AddTodo = connect()(AddTodo)
