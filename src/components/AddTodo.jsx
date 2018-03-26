import React from 'react'

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
      <button
        onClick={() => {
          onAddClick(groupId, inputNode.value)
          inputNode.value = ''
        }}
        className="add-todo__btn"
      >
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
