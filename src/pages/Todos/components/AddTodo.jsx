import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const AddTodo = ({ groupId, onAddClick }) => {
  let inputNode

  if (groupId == null) {
    return (
      <div className='add-todo' />
    )
  }

  return (
    <div className='add-todo'>
      <input ref={(node) => { inputNode = node }} className='add-todo__input' />
      <Button width='20%' onClick={() => {
        onAddClick(groupId, inputNode.value)
        inputNode.value = ''
      }}>
        Add Todo
      </Button>
    </div>
  )
}

AddTodo.propTypes = {
  groupId: PropTypes.number,
  onAddClick: PropTypes.func.isRequired
}

export default AddTodo
