import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button'
import Inner from './Inner'
import TextInput from './TextInput'

const TodoForm = ({ groupId, onAddClick }) => {
  let inputNode

  if (groupId === null) {
    return <Inner />
  }

  return (
    <Inner>
      <TextInput innerRef={node => { inputNode = node }} />
      <Button
        width='20%'
        onClick={() => {
          onAddClick(groupId, inputNode.value)
          inputNode.value = ''
        }}
      >
        Add Todo
      </Button>
    </Inner>
  )
}

TodoForm.propTypes = {
  groupId: PropTypes.number,
  onAddClick: PropTypes.func.isRequired
}

export default TodoForm
