import React from 'react'
import PropTypes from 'prop-types'

import { todosConstants } from '../constants'

let nextTodoId = 0
export const AddTodo = (props, { store }) => {
  let input

  return (
    <div>
      <input ref={node => { input = node }} />
      <button onClick={() => {
        store.dispatch({
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
AddTodo.contextTypes = {
  store: PropTypes.object
}
