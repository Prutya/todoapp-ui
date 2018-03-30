import React from 'react'
import Button from './Button'

const AddTodo = ({ groupId, onAddClick }) => {
  let inputNode

  if (groupId == null) {
    return (
      <div className="add-todo"></div>
    )
  }

  return (
    <div onSubmit={(e) => onSubmit(e)} className="add-todo">
      <input ref={(node) => { inputNode = node }} className="add-todo__input" />
      <Button width="20%" onClick={() => {
        onAddClick(groupId, inputNode.value)
        inputNode.value = ''
      }}>
        Add Todo
      </Button>
    </div>
  )
}

export default AddTodo
