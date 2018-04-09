import React from 'react'
import PropTypes from 'prop-types'
import FaTrash from 'react-icons/lib/fa/trash'

import Styled from './styled'
import TodoDeleteBtn from 'pages/Todos/components/TodoDeleteBtn'
import TodoText from 'pages/Todos/components/TodoText'

const Todo = ({ completed, text, onTextClick, onDeleteClick }) => (
  <Styled>
    <TodoText onClick={() => onTextClick()} striked={completed}>
      {text}
    </TodoText>
    <TodoDeleteBtn onClick={() => onDeleteClick()}>
      <FaTrash />
    </TodoDeleteBtn>
  </Styled>
)

Todo.propTypes = ({
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onTextClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
})

export default Todo
